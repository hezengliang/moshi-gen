/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Thing from './Thing';

const _debug = debug('moshi:classes:Person');
const additionalName = Symbol.for('additionalName');
const address = Symbol.for('address');
const affiliation = Symbol.for('affiliation');
const alumniOf = Symbol.for('alumniOf');
const award = Symbol.for('award');
const birthDate = Symbol.for('birthDate');
const birthPlace = Symbol.for('birthPlace');
const brand = Symbol.for('brand');
const children = Symbol.for('children');
const colleague = Symbol.for('colleague');
const contactPoint = Symbol.for('contactPoint');
const deathDate = Symbol.for('deathDate');
const deathPlace = Symbol.for('deathPlace');
const duns = Symbol.for('duns');
const email = Symbol.for('email');
const familyName = Symbol.for('familyName');
const faxNumber = Symbol.for('faxNumber');
const follows = Symbol.for('follows');
const gender = Symbol.for('gender');
const givenName = Symbol.for('givenName');
const globalLocationNumber = Symbol.for('globalLocationNumber');
const hasOfferCatalog = Symbol.for('hasOfferCatalog');
const hasPOS = Symbol.for('hasPOS');
const height = Symbol.for('height');
const homeLocation = Symbol.for('homeLocation');
const honorificPrefix = Symbol.for('honorificPrefix');
const honorificSuffix = Symbol.for('honorificSuffix');
const isicV4 = Symbol.for('isicV4');
const jobTitle = Symbol.for('jobTitle');
const knows = Symbol.for('knows');
const makesOffer = Symbol.for('makesOffer');
const memberOf = Symbol.for('memberOf');
const naics = Symbol.for('naics');
const nationality = Symbol.for('nationality');
const netWorth = Symbol.for('netWorth');
const owns = Symbol.for('owns');
const parent = Symbol.for('parent');
const performerIn = Symbol.for('performerIn');
const relatedTo = Symbol.for('relatedTo');
const seeks = Symbol.for('seeks');
const sibling = Symbol.for('sibling');
const spouse = Symbol.for('spouse');
const taxID = Symbol.for('taxID');
const telephone = Symbol.for('telephone');
const vatID = Symbol.for('vatID');
const weight = Symbol.for('weight');
const workLocation = Symbol.for('workLocation');
const worksFor = Symbol.for('worksFor');


/**
 * A person (alive, dead, undead, or fictional).
 */
class Person extends Thing {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Person';
  }

  set additionalName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[additionalName] = this.constructor.toArray(sanitized);
  }

  get additionalName() {
    let value = this[additionalName];
    return this.constructor.fromArray(value);
  }  set address(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','PostalAddress');
    this[address] = this.constructor.toArray(sanitized);
  }

  get address() {
    let value = this[address];
    return this.constructor.fromArray(value);
  }  set affiliation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[affiliation] = this.constructor.toArray(sanitized);
  }

  get affiliation() {
    let value = this[affiliation];
    return this.constructor.fromArray(value);
  }  set alumniOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'EducationalOrganization','Organization');
    this[alumniOf] = this.constructor.toArray(sanitized);
  }

  get alumniOf() {
    let value = this[alumniOf];
    return this.constructor.fromArray(value);
  }  set award(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[award] = this.constructor.toArray(sanitized);
  }

  get award() {
    let value = this[award];
    return this.constructor.fromArray(value);
  }  set birthDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[birthDate] = this.constructor.toArray(sanitized);
  }

  get birthDate() {
    let value = this[birthDate];
    return this.constructor.fromArray(value);
  }  set birthPlace(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[birthPlace] = this.constructor.toArray(sanitized);
  }

  get birthPlace() {
    let value = this[birthPlace];
    return this.constructor.fromArray(value);
  }  set brand(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization','Brand');
    this[brand] = this.constructor.toArray(sanitized);
  }

  get brand() {
    let value = this[brand];
    return this.constructor.fromArray(value);
  }  set children(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[children] = this.constructor.toArray(sanitized);
  }

  get children() {
    let value = this[children];
    return this.constructor.fromArray(value);
  }  set colleague(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[colleague] = this.constructor.toArray(sanitized);
  }

  get colleague() {
    let value = this[colleague];
    return this.constructor.fromArray(value);
  }  set contactPoint(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ContactPoint');
    this[contactPoint] = this.constructor.toArray(sanitized);
  }

  get contactPoint() {
    let value = this[contactPoint];
    return this.constructor.fromArray(value);
  }  set deathDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[deathDate] = this.constructor.toArray(sanitized);
  }

  get deathDate() {
    let value = this[deathDate];
    return this.constructor.fromArray(value);
  }  set deathPlace(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[deathPlace] = this.constructor.toArray(sanitized);
  }

  get deathPlace() {
    let value = this[deathPlace];
    return this.constructor.fromArray(value);
  }  set duns(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[duns] = this.constructor.toArray(sanitized);
  }

  get duns() {
    let value = this[duns];
    return this.constructor.fromArray(value);
  }  set email(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[email] = this.constructor.toArray(sanitized);
  }

  get email() {
    let value = this[email];
    return this.constructor.fromArray(value);
  }  set familyName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[familyName] = this.constructor.toArray(sanitized);
  }

  get familyName() {
    let value = this[familyName];
    return this.constructor.fromArray(value);
  }  set faxNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[faxNumber] = this.constructor.toArray(sanitized);
  }

  get faxNumber() {
    let value = this[faxNumber];
    return this.constructor.fromArray(value);
  }  set follows(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[follows] = this.constructor.toArray(sanitized);
  }

  get follows() {
    let value = this[follows];
    return this.constructor.fromArray(value);
  }  set gender(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[gender] = this.constructor.toArray(sanitized);
  }

  get gender() {
    let value = this[gender];
    return this.constructor.fromArray(value);
  }  set givenName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[givenName] = this.constructor.toArray(sanitized);
  }

  get givenName() {
    let value = this[givenName];
    return this.constructor.fromArray(value);
  }  set globalLocationNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[globalLocationNumber] = this.constructor.toArray(sanitized);
  }

  get globalLocationNumber() {
    let value = this[globalLocationNumber];
    return this.constructor.fromArray(value);
  }  set hasOfferCatalog(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OfferCatalog');
    this[hasOfferCatalog] = this.constructor.toArray(sanitized);
  }

  get hasOfferCatalog() {
    let value = this[hasOfferCatalog];
    return this.constructor.fromArray(value);
  }  set hasPOS(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[hasPOS] = this.constructor.toArray(sanitized);
  }

  get hasPOS() {
    let value = this[hasPOS];
    return this.constructor.fromArray(value);
  }  set height(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Distance','QuantitativeValue');
    this[height] = this.constructor.toArray(sanitized);
  }

  get height() {
    let value = this[height];
    return this.constructor.fromArray(value);
  }  set homeLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place','ContactPoint');
    this[homeLocation] = this.constructor.toArray(sanitized);
  }

  get homeLocation() {
    let value = this[homeLocation];
    return this.constructor.fromArray(value);
  }  set honorificPrefix(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[honorificPrefix] = this.constructor.toArray(sanitized);
  }

  get honorificPrefix() {
    let value = this[honorificPrefix];
    return this.constructor.fromArray(value);
  }  set honorificSuffix(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[honorificSuffix] = this.constructor.toArray(sanitized);
  }

  get honorificSuffix() {
    let value = this[honorificSuffix];
    return this.constructor.fromArray(value);
  }  set isicV4(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[isicV4] = this.constructor.toArray(sanitized);
  }

  get isicV4() {
    let value = this[isicV4];
    return this.constructor.fromArray(value);
  }  set jobTitle(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[jobTitle] = this.constructor.toArray(sanitized);
  }

  get jobTitle() {
    let value = this[jobTitle];
    return this.constructor.fromArray(value);
  }  set knows(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[knows] = this.constructor.toArray(sanitized);
  }

  get knows() {
    let value = this[knows];
    return this.constructor.fromArray(value);
  }  set makesOffer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Offer');
    this[makesOffer] = this.constructor.toArray(sanitized);
  }

  get makesOffer() {
    let value = this[makesOffer];
    return this.constructor.fromArray(value);
  }  set memberOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ProgramMembership','Organization');
    this[memberOf] = this.constructor.toArray(sanitized);
  }

  get memberOf() {
    let value = this[memberOf];
    return this.constructor.fromArray(value);
  }  set naics(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[naics] = this.constructor.toArray(sanitized);
  }

  get naics() {
    let value = this[naics];
    return this.constructor.fromArray(value);
  }  set nationality(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Country');
    this[nationality] = this.constructor.toArray(sanitized);
  }

  get nationality() {
    let value = this[nationality];
    return this.constructor.fromArray(value);
  }  set netWorth(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PriceSpecification');
    this[netWorth] = this.constructor.toArray(sanitized);
  }

  get netWorth() {
    let value = this[netWorth];
    return this.constructor.fromArray(value);
  }  set owns(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OwnershipInfo','Product');
    this[owns] = this.constructor.toArray(sanitized);
  }

  get owns() {
    let value = this[owns];
    return this.constructor.fromArray(value);
  }  set parent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[parent] = this.constructor.toArray(sanitized);
  }

  get parent() {
    let value = this[parent];
    return this.constructor.fromArray(value);
  }  set performerIn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Event');
    this[performerIn] = this.constructor.toArray(sanitized);
  }

  get performerIn() {
    let value = this[performerIn];
    return this.constructor.fromArray(value);
  }  set relatedTo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[relatedTo] = this.constructor.toArray(sanitized);
  }

  get relatedTo() {
    let value = this[relatedTo];
    return this.constructor.fromArray(value);
  }  set seeks(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Demand');
    this[seeks] = this.constructor.toArray(sanitized);
  }

  get seeks() {
    let value = this[seeks];
    return this.constructor.fromArray(value);
  }  set sibling(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[sibling] = this.constructor.toArray(sanitized);
  }

  get sibling() {
    let value = this[sibling];
    return this.constructor.fromArray(value);
  }  set spouse(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[spouse] = this.constructor.toArray(sanitized);
  }

  get spouse() {
    let value = this[spouse];
    return this.constructor.fromArray(value);
  }  set taxID(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[taxID] = this.constructor.toArray(sanitized);
  }

  get taxID() {
    let value = this[taxID];
    return this.constructor.fromArray(value);
  }  set telephone(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[telephone] = this.constructor.toArray(sanitized);
  }

  get telephone() {
    let value = this[telephone];
    return this.constructor.fromArray(value);
  }  set vatID(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[vatID] = this.constructor.toArray(sanitized);
  }

  get vatID() {
    let value = this[vatID];
    return this.constructor.fromArray(value);
  }  set weight(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[weight] = this.constructor.toArray(sanitized);
  }

  get weight() {
    let value = this[weight];
    return this.constructor.fromArray(value);
  }  set workLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place','ContactPoint');
    this[workLocation] = this.constructor.toArray(sanitized);
  }

  get workLocation() {
    let value = this[workLocation];
    return this.constructor.fromArray(value);
  }  set worksFor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[worksFor] = this.constructor.toArray(sanitized);
  }

  get worksFor() {
    let value = this[worksFor];
    return this.constructor.fromArray(value);
  }

}

export default Person;
