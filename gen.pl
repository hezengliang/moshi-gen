#!perl
use strict;
use Modern::Perl;
use HTML::TreeBuilder 5 -weak;
use Data::Dump qw(dump);
use Template;

my $baseUrl = 'http://schema.org';
my $url     = 'http://schema.org/docs/full.html';
my $tree    = HTML::TreeBuilder->new_from_url($url);

# say dump($tree);
my $thingTree
    = ( $tree->look_down( "_tag" => 'div', "id" => "thing_tree" ) )[0];

# say dump($thingTree);
my @things = $thingTree->look_down(
    "_tag" => 'a',
    sub { $_[0]->attr('href') =~ m!^/! }
);    # only process the links starts with '/'
my $tt = Template->new(
    {   INCLUDE_PATH => './templates',
        OUTPUT_PATH  => './output',
        STRICT       => 1,
        INTERPOLATE  => 1,
    }
) or die "$Template::ERROR\n";

for my $schemaObj (@things) {
    my $schemaName = $schemaObj->as_trimmed_text();
    my $schemaUrl  = $schemaObj->attr('href');
    if ( $schemaName eq 'Thing' ) {
        say "<Thing> schema will be skipped.";
        next;
    }
    say $schemaName, " --> ", $schemaUrl;
    my $schemaTree = HTML::TreeBuilder->new_from_url("$baseUrl/$schemaUrl");

    # say $schemaTree->as_HTML;
    my %templateVars = (
        superClass => '',
        selfClass  => $schemaName,
        comments   => 'testComments',
        attrs      => []
    );

    # processing comments
    $templateVars{comments} = (
        $schemaTree->look_down(
            "_tag"     => 'div',
            "property" => 'rdfs:comment'
        )
    )[0]->as_trimmed_text();

    # processing super class
    my @superClasses
        = (
        $schemaTree->look_down( "_tag" => 'span', "class" => 'breadcrumbs' ) )
        [0]->look_down( "_tag" => 'a' );
    $templateVars{superClass}
        = $superClasses[ $#superClasses - 1 ]->as_trimmed_text;

    # processing attributes ( The second tbody tag )
    # check the schema owns private attributes
    my @shcemaTables = $schemaTree->look_down( "_tag" => 'table' );
    my $defTable = shift @shcemaTables;
    if ( $defTable->parent->tag eq 'div' ) {
        $defTable = $defTable->parent;
    }
    unless ( $defTable->right->as_trimmed_text eq $schemaName ) {
        say "The schema <$schemaName> has not any private attribute.";
    }
    else {
        my @attrs;

        # processing prop
        for my $property (@shcemaTables) {
            my $checkNode
                = $property->look_down( '_tag' => 'th', 'colspan' => 3 );
            last
                if ( defined $checkNode )
                ;    # if found, then the others are parent's prop
            my $propName = (
                (   $property->look_down(
                        "_tag"   => 'code',
                        property => 'rdfs:label'
                    )
                )[0]->look_down( "_tag" => 'a' )
            )[0]->as_trimmed_text();

            # special process for property types
            my @propStrs;

            # get the first property name
            my $aProperty    = $property->right;
            my $propertyName = $aProperty->as_trimmed_text;
            say "Got property: $propertyName. ", $aProperty->address;
            push @propStrs, "'$propertyName'";

            # check if there is any other property
            my $propAddress = $aProperty->address;
            say "Start prop address: $propAddress";
            while (1) {
                my @adds = split /\./, $propAddress;

                # check if the next 1 elements is a ' or ' text
                $adds[$#adds] += 1;
                $propAddress = join '.', @adds;
                my $newProperty = $schemaTree->address($propAddress);
                if ( $newProperty =~ m/or/i ) {

                    # if true then the element next two ones is the new prop
                    $adds[$#adds] += 2;
                    $propAddress = join '.', @adds;
                    my $newProperty  = $schemaTree->address($propAddress);
                    my $propertyName = $newProperty->as_trimmed_text;
                    say "Got property: $propertyName. ",
                        $newProperty->address;
                    push @propStrs, "'$propertyName'";
                }
                else {
                    last;
                }
            }
            my $propTypesStr = join ',', @propStrs;
            push @attrs, { name => $propName, types => $propTypesStr };
        }
        $templateVars{attrs} = \@attrs;
    }
    $tt->process( 'objects.tpl', \%templateVars, "$schemaName.js" )
        or die $tt->error(), "\n";
    say "The schema <$schemaName> object file has been generated.";
}
