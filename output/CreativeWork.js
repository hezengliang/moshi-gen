/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Thing from './Thing';

const _debug = debug('moshi:classes:CreativeWork');
const about = Symbol.for('about');
const accessibilityAPI = Symbol.for('accessibilityAPI');
const accessibilityControl = Symbol.for('accessibilityControl');
const accessibilityFeature = Symbol.for('accessibilityFeature');
const accessibilityHazard = Symbol.for('accessibilityHazard');
const accountablePerson = Symbol.for('accountablePerson');
const aggregateRating = Symbol.for('aggregateRating');
const alternativeHeadline = Symbol.for('alternativeHeadline');
const associatedMedia = Symbol.for('associatedMedia');
const audience = Symbol.for('audience');
const audio = Symbol.for('audio');
const author = Symbol.for('author');
const award = Symbol.for('award');
const character = Symbol.for('character');
const citation = Symbol.for('citation');
const comment = Symbol.for('comment');
const commentCount = Symbol.for('commentCount');
const contentLocation = Symbol.for('contentLocation');
const contentRating = Symbol.for('contentRating');
const contributor = Symbol.for('contributor');
const copyrightHolder = Symbol.for('copyrightHolder');
const copyrightYear = Symbol.for('copyrightYear');
const creator = Symbol.for('creator');
const dateCreated = Symbol.for('dateCreated');
const dateModified = Symbol.for('dateModified');
const datePublished = Symbol.for('datePublished');
const discussionUrl = Symbol.for('discussionUrl');
const editor = Symbol.for('editor');
const educationalAlignment = Symbol.for('educationalAlignment');
const educationalUse = Symbol.for('educationalUse');
const encoding = Symbol.for('encoding');
const exampleOfWork = Symbol.for('exampleOfWork');
const fileFormat = Symbol.for('fileFormat');
const genre = Symbol.for('genre');
const hasPart = Symbol.for('hasPart');
const headline = Symbol.for('headline');
const inLanguage = Symbol.for('inLanguage');
const interactionStatistic = Symbol.for('interactionStatistic');
const interactivityType = Symbol.for('interactivityType');
const isBasedOnUrl = Symbol.for('isBasedOnUrl');
const isFamilyFriendly = Symbol.for('isFamilyFriendly');
const isPartOf = Symbol.for('isPartOf');
const keywords = Symbol.for('keywords');
const learningResourceType = Symbol.for('learningResourceType');
const license = Symbol.for('license');
const locationCreated = Symbol.for('locationCreated');
const mainEntity = Symbol.for('mainEntity');
const mentions = Symbol.for('mentions');
const offers = Symbol.for('offers');
const position = Symbol.for('position');
const producer = Symbol.for('producer');
const provider = Symbol.for('provider');
const publication = Symbol.for('publication');
const publisher = Symbol.for('publisher');
const publishingPrinciples = Symbol.for('publishingPrinciples');
const recordedAt = Symbol.for('recordedAt');
const releasedEvent = Symbol.for('releasedEvent');
const review = Symbol.for('review');
const schemaVersion = Symbol.for('schemaVersion');
const sourceOrganization = Symbol.for('sourceOrganization');
const text = Symbol.for('text');
const thumbnailUrl = Symbol.for('thumbnailUrl');
const timeRequired = Symbol.for('timeRequired');
const translator = Symbol.for('translator');
const typicalAgeRange = Symbol.for('typicalAgeRange');
const version = Symbol.for('version');
const video = Symbol.for('video');
const workExample = Symbol.for('workExample');


/**
 * The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 */
class CreativeWork extends Thing {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CreativeWork';
  }

  set about(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[about] = this.constructor.toArray(sanitized);
  }

  get about() {
    let value = this[about];
    return this.constructor.fromArray(value);
  }  set accessibilityAPI(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[accessibilityAPI] = this.constructor.toArray(sanitized);
  }

  get accessibilityAPI() {
    let value = this[accessibilityAPI];
    return this.constructor.fromArray(value);
  }  set accessibilityControl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[accessibilityControl] = this.constructor.toArray(sanitized);
  }

  get accessibilityControl() {
    let value = this[accessibilityControl];
    return this.constructor.fromArray(value);
  }  set accessibilityFeature(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[accessibilityFeature] = this.constructor.toArray(sanitized);
  }

  get accessibilityFeature() {
    let value = this[accessibilityFeature];
    return this.constructor.fromArray(value);
  }  set accessibilityHazard(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[accessibilityHazard] = this.constructor.toArray(sanitized);
  }

  get accessibilityHazard() {
    let value = this[accessibilityHazard];
    return this.constructor.fromArray(value);
  }  set accountablePerson(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[accountablePerson] = this.constructor.toArray(sanitized);
  }

  get accountablePerson() {
    let value = this[accountablePerson];
    return this.constructor.fromArray(value);
  }  set aggregateRating(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AggregateRating');
    this[aggregateRating] = this.constructor.toArray(sanitized);
  }

  get aggregateRating() {
    let value = this[aggregateRating];
    return this.constructor.fromArray(value);
  }  set alternativeHeadline(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[alternativeHeadline] = this.constructor.toArray(sanitized);
  }

  get alternativeHeadline() {
    let value = this[alternativeHeadline];
    return this.constructor.fromArray(value);
  }  set associatedMedia(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MediaObject');
    this[associatedMedia] = this.constructor.toArray(sanitized);
  }

  get associatedMedia() {
    let value = this[associatedMedia];
    return this.constructor.fromArray(value);
  }  set audience(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Audience');
    this[audience] = this.constructor.toArray(sanitized);
  }

  get audience() {
    let value = this[audience];
    return this.constructor.fromArray(value);
  }  set audio(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AudioObject');
    this[audio] = this.constructor.toArray(sanitized);
  }

  get audio() {
    let value = this[audio];
    return this.constructor.fromArray(value);
  }  set author(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[author] = this.constructor.toArray(sanitized);
  }

  get author() {
    let value = this[author];
    return this.constructor.fromArray(value);
  }  set award(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[award] = this.constructor.toArray(sanitized);
  }

  get award() {
    let value = this[award];
    return this.constructor.fromArray(value);
  }  set character(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[character] = this.constructor.toArray(sanitized);
  }

  get character() {
    let value = this[character];
    return this.constructor.fromArray(value);
  }  set citation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork','Text');
    this[citation] = this.constructor.toArray(sanitized);
  }

  get citation() {
    let value = this[citation];
    return this.constructor.fromArray(value);
  }  set comment(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Comment');
    this[comment] = this.constructor.toArray(sanitized);
  }

  get comment() {
    let value = this[comment];
    return this.constructor.fromArray(value);
  }  set commentCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[commentCount] = this.constructor.toArray(sanitized);
  }

  get commentCount() {
    let value = this[commentCount];
    return this.constructor.fromArray(value);
  }  set contentLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[contentLocation] = this.constructor.toArray(sanitized);
  }

  get contentLocation() {
    let value = this[contentLocation];
    return this.constructor.fromArray(value);
  }  set contentRating(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[contentRating] = this.constructor.toArray(sanitized);
  }

  get contentRating() {
    let value = this[contentRating];
    return this.constructor.fromArray(value);
  }  set contributor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[contributor] = this.constructor.toArray(sanitized);
  }

  get contributor() {
    let value = this[contributor];
    return this.constructor.fromArray(value);
  }  set copyrightHolder(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[copyrightHolder] = this.constructor.toArray(sanitized);
  }

  get copyrightHolder() {
    let value = this[copyrightHolder];
    return this.constructor.fromArray(value);
  }  set copyrightYear(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[copyrightYear] = this.constructor.toArray(sanitized);
  }

  get copyrightYear() {
    let value = this[copyrightYear];
    return this.constructor.fromArray(value);
  }  set creator(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[creator] = this.constructor.toArray(sanitized);
  }

  get creator() {
    let value = this[creator];
    return this.constructor.fromArray(value);
  }  set dateCreated(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date','DateTime');
    this[dateCreated] = this.constructor.toArray(sanitized);
  }

  get dateCreated() {
    let value = this[dateCreated];
    return this.constructor.fromArray(value);
  }  set dateModified(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date','DateTime');
    this[dateModified] = this.constructor.toArray(sanitized);
  }

  get dateModified() {
    let value = this[dateModified];
    return this.constructor.fromArray(value);
  }  set datePublished(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[datePublished] = this.constructor.toArray(sanitized);
  }

  get datePublished() {
    let value = this[datePublished];
    return this.constructor.fromArray(value);
  }  set discussionUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[discussionUrl] = this.constructor.toArray(sanitized);
  }

  get discussionUrl() {
    let value = this[discussionUrl];
    return this.constructor.fromArray(value);
  }  set editor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[editor] = this.constructor.toArray(sanitized);
  }

  get editor() {
    let value = this[editor];
    return this.constructor.fromArray(value);
  }  set educationalAlignment(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AlignmentObject');
    this[educationalAlignment] = this.constructor.toArray(sanitized);
  }

  get educationalAlignment() {
    let value = this[educationalAlignment];
    return this.constructor.fromArray(value);
  }  set educationalUse(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[educationalUse] = this.constructor.toArray(sanitized);
  }

  get educationalUse() {
    let value = this[educationalUse];
    return this.constructor.fromArray(value);
  }  set encoding(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MediaObject');
    this[encoding] = this.constructor.toArray(sanitized);
  }

  get encoding() {
    let value = this[encoding];
    return this.constructor.fromArray(value);
  }  set exampleOfWork(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[exampleOfWork] = this.constructor.toArray(sanitized);
  }

  get exampleOfWork() {
    let value = this[exampleOfWork];
    return this.constructor.fromArray(value);
  }  set fileFormat(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[fileFormat] = this.constructor.toArray(sanitized);
  }

  get fileFormat() {
    let value = this[fileFormat];
    return this.constructor.fromArray(value);
  }  set genre(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','URL');
    this[genre] = this.constructor.toArray(sanitized);
  }

  get genre() {
    let value = this[genre];
    return this.constructor.fromArray(value);
  }  set hasPart(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[hasPart] = this.constructor.toArray(sanitized);
  }

  get hasPart() {
    let value = this[hasPart];
    return this.constructor.fromArray(value);
  }  set headline(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[headline] = this.constructor.toArray(sanitized);
  }

  get headline() {
    let value = this[headline];
    return this.constructor.fromArray(value);
  }  set inLanguage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','Language');
    this[inLanguage] = this.constructor.toArray(sanitized);
  }

  get inLanguage() {
    let value = this[inLanguage];
    return this.constructor.fromArray(value);
  }  set interactionStatistic(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'InteractionCounter');
    this[interactionStatistic] = this.constructor.toArray(sanitized);
  }

  get interactionStatistic() {
    let value = this[interactionStatistic];
    return this.constructor.fromArray(value);
  }  set interactivityType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[interactivityType] = this.constructor.toArray(sanitized);
  }

  get interactivityType() {
    let value = this[interactivityType];
    return this.constructor.fromArray(value);
  }  set isBasedOnUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[isBasedOnUrl] = this.constructor.toArray(sanitized);
  }

  get isBasedOnUrl() {
    let value = this[isBasedOnUrl];
    return this.constructor.fromArray(value);
  }  set isFamilyFriendly(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[isFamilyFriendly] = this.constructor.toArray(sanitized);
  }

  get isFamilyFriendly() {
    let value = this[isFamilyFriendly];
    return this.constructor.fromArray(value);
  }  set isPartOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[isPartOf] = this.constructor.toArray(sanitized);
  }

  get isPartOf() {
    let value = this[isPartOf];
    return this.constructor.fromArray(value);
  }  set keywords(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[keywords] = this.constructor.toArray(sanitized);
  }

  get keywords() {
    let value = this[keywords];
    return this.constructor.fromArray(value);
  }  set learningResourceType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[learningResourceType] = this.constructor.toArray(sanitized);
  }

  get learningResourceType() {
    let value = this[learningResourceType];
    return this.constructor.fromArray(value);
  }  set license(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork','URL');
    this[license] = this.constructor.toArray(sanitized);
  }

  get license() {
    let value = this[license];
    return this.constructor.fromArray(value);
  }  set locationCreated(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[locationCreated] = this.constructor.toArray(sanitized);
  }

  get locationCreated() {
    let value = this[locationCreated];
    return this.constructor.fromArray(value);
  }  set mainEntity(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[mainEntity] = this.constructor.toArray(sanitized);
  }

  get mainEntity() {
    let value = this[mainEntity];
    return this.constructor.fromArray(value);
  }  set mentions(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[mentions] = this.constructor.toArray(sanitized);
  }

  get mentions() {
    let value = this[mentions];
    return this.constructor.fromArray(value);
  }  set offers(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Offer');
    this[offers] = this.constructor.toArray(sanitized);
  }

  get offers() {
    let value = this[offers];
    return this.constructor.fromArray(value);
  }  set position(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[position] = this.constructor.toArray(sanitized);
  }

  get position() {
    let value = this[position];
    return this.constructor.fromArray(value);
  }  set producer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[producer] = this.constructor.toArray(sanitized);
  }

  get producer() {
    let value = this[producer];
    return this.constructor.fromArray(value);
  }  set provider(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[provider] = this.constructor.toArray(sanitized);
  }

  get provider() {
    let value = this[provider];
    return this.constructor.fromArray(value);
  }  set publication(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PublicationEvent');
    this[publication] = this.constructor.toArray(sanitized);
  }

  get publication() {
    let value = this[publication];
    return this.constructor.fromArray(value);
  }  set publisher(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[publisher] = this.constructor.toArray(sanitized);
  }

  get publisher() {
    let value = this[publisher];
    return this.constructor.fromArray(value);
  }  set publishingPrinciples(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[publishingPrinciples] = this.constructor.toArray(sanitized);
  }

  get publishingPrinciples() {
    let value = this[publishingPrinciples];
    return this.constructor.fromArray(value);
  }  set recordedAt(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Event');
    this[recordedAt] = this.constructor.toArray(sanitized);
  }

  get recordedAt() {
    let value = this[recordedAt];
    return this.constructor.fromArray(value);
  }  set releasedEvent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PublicationEvent');
    this[releasedEvent] = this.constructor.toArray(sanitized);
  }

  get releasedEvent() {
    let value = this[releasedEvent];
    return this.constructor.fromArray(value);
  }  set review(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Review');
    this[review] = this.constructor.toArray(sanitized);
  }

  get review() {
    let value = this[review];
    return this.constructor.fromArray(value);
  }  set schemaVersion(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','URL');
    this[schemaVersion] = this.constructor.toArray(sanitized);
  }

  get schemaVersion() {
    let value = this[schemaVersion];
    return this.constructor.fromArray(value);
  }  set sourceOrganization(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[sourceOrganization] = this.constructor.toArray(sanitized);
  }

  get sourceOrganization() {
    let value = this[sourceOrganization];
    return this.constructor.fromArray(value);
  }  set text(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[text] = this.constructor.toArray(sanitized);
  }

  get text() {
    let value = this[text];
    return this.constructor.fromArray(value);
  }  set thumbnailUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[thumbnailUrl] = this.constructor.toArray(sanitized);
  }

  get thumbnailUrl() {
    let value = this[thumbnailUrl];
    return this.constructor.fromArray(value);
  }  set timeRequired(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[timeRequired] = this.constructor.toArray(sanitized);
  }

  get timeRequired() {
    let value = this[timeRequired];
    return this.constructor.fromArray(value);
  }  set translator(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[translator] = this.constructor.toArray(sanitized);
  }

  get translator() {
    let value = this[translator];
    return this.constructor.fromArray(value);
  }  set typicalAgeRange(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[typicalAgeRange] = this.constructor.toArray(sanitized);
  }

  get typicalAgeRange() {
    let value = this[typicalAgeRange];
    return this.constructor.fromArray(value);
  }  set version(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[version] = this.constructor.toArray(sanitized);
  }

  get version() {
    let value = this[version];
    return this.constructor.fromArray(value);
  }  set video(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'VideoObject');
    this[video] = this.constructor.toArray(sanitized);
  }

  get video() {
    let value = this[video];
    return this.constructor.fromArray(value);
  }  set workExample(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[workExample] = this.constructor.toArray(sanitized);
  }

  get workExample() {
    let value = this[workExample];
    return this.constructor.fromArray(value);
  }

}

export default CreativeWork;
