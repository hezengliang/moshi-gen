/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Thing from './Thing';

const _debug = debug('moshi:classes:Organization');
const address = Symbol.for('address');
const aggregateRating = Symbol.for('aggregateRating');
const alumni = Symbol.for('alumni');
const areaServed = Symbol.for('areaServed');
const award = Symbol.for('award');
const brand = Symbol.for('brand');
const contactPoint = Symbol.for('contactPoint');
const department = Symbol.for('department');
const dissolutionDate = Symbol.for('dissolutionDate');
const duns = Symbol.for('duns');
const email = Symbol.for('email');
const employee = Symbol.for('employee');
const event = Symbol.for('event');
const faxNumber = Symbol.for('faxNumber');
const founder = Symbol.for('founder');
const foundingDate = Symbol.for('foundingDate');
const foundingLocation = Symbol.for('foundingLocation');
const globalLocationNumber = Symbol.for('globalLocationNumber');
const hasOfferCatalog = Symbol.for('hasOfferCatalog');
const hasPOS = Symbol.for('hasPOS');
const isicV4 = Symbol.for('isicV4');
const legalName = Symbol.for('legalName');
const location = Symbol.for('location');
const logo = Symbol.for('logo');
const makesOffer = Symbol.for('makesOffer');
const member = Symbol.for('member');
const memberOf = Symbol.for('memberOf');
const naics = Symbol.for('naics');
const numberOfEmployees = Symbol.for('numberOfEmployees');
const owns = Symbol.for('owns');
const parentOrganization = Symbol.for('parentOrganization');
const review = Symbol.for('review');
const seeks = Symbol.for('seeks');
const subOrganization = Symbol.for('subOrganization');
const taxID = Symbol.for('taxID');
const telephone = Symbol.for('telephone');
const vatID = Symbol.for('vatID');


/**
 * An organization such as a school, NGO, corporation, club, etc.
 */
class Organization extends Thing {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Organization';
  }

  set address(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','PostalAddress');
    this[address] = this.constructor.toArray(sanitized);
  }

  get address() {
    let value = this[address];
    return this.constructor.fromArray(value);
  }  set aggregateRating(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AggregateRating');
    this[aggregateRating] = this.constructor.toArray(sanitized);
  }

  get aggregateRating() {
    let value = this[aggregateRating];
    return this.constructor.fromArray(value);
  }  set alumni(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[alumni] = this.constructor.toArray(sanitized);
  }

  get alumni() {
    let value = this[alumni];
    return this.constructor.fromArray(value);
  }  set areaServed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','GeoShape','AdministrativeArea','Place');
    this[areaServed] = this.constructor.toArray(sanitized);
  }

  get areaServed() {
    let value = this[areaServed];
    return this.constructor.fromArray(value);
  }  set award(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[award] = this.constructor.toArray(sanitized);
  }

  get award() {
    let value = this[award];
    return this.constructor.fromArray(value);
  }  set brand(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization','Brand');
    this[brand] = this.constructor.toArray(sanitized);
  }

  get brand() {
    let value = this[brand];
    return this.constructor.fromArray(value);
  }  set contactPoint(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ContactPoint');
    this[contactPoint] = this.constructor.toArray(sanitized);
  }

  get contactPoint() {
    let value = this[contactPoint];
    return this.constructor.fromArray(value);
  }  set department(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[department] = this.constructor.toArray(sanitized);
  }

  get department() {
    let value = this[department];
    return this.constructor.fromArray(value);
  }  set dissolutionDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[dissolutionDate] = this.constructor.toArray(sanitized);
  }

  get dissolutionDate() {
    let value = this[dissolutionDate];
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
  }  set employee(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[employee] = this.constructor.toArray(sanitized);
  }

  get employee() {
    let value = this[employee];
    return this.constructor.fromArray(value);
  }  set event(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Event');
    this[event] = this.constructor.toArray(sanitized);
  }

  get event() {
    let value = this[event];
    return this.constructor.fromArray(value);
  }  set faxNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[faxNumber] = this.constructor.toArray(sanitized);
  }

  get faxNumber() {
    let value = this[faxNumber];
    return this.constructor.fromArray(value);
  }  set founder(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[founder] = this.constructor.toArray(sanitized);
  }

  get founder() {
    let value = this[founder];
    return this.constructor.fromArray(value);
  }  set foundingDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[foundingDate] = this.constructor.toArray(sanitized);
  }

  get foundingDate() {
    let value = this[foundingDate];
    return this.constructor.fromArray(value);
  }  set foundingLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[foundingLocation] = this.constructor.toArray(sanitized);
  }

  get foundingLocation() {
    let value = this[foundingLocation];
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
  }  set isicV4(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[isicV4] = this.constructor.toArray(sanitized);
  }

  get isicV4() {
    let value = this[isicV4];
    return this.constructor.fromArray(value);
  }  set legalName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[legalName] = this.constructor.toArray(sanitized);
  }

  get legalName() {
    let value = this[legalName];
    return this.constructor.fromArray(value);
  }  set location(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','PostalAddress','Place');
    this[location] = this.constructor.toArray(sanitized);
  }

  get location() {
    let value = this[location];
    return this.constructor.fromArray(value);
  }  set logo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','ImageObject');
    this[logo] = this.constructor.toArray(sanitized);
  }

  get logo() {
    let value = this[logo];
    return this.constructor.fromArray(value);
  }  set makesOffer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Offer');
    this[makesOffer] = this.constructor.toArray(sanitized);
  }

  get makesOffer() {
    let value = this[makesOffer];
    return this.constructor.fromArray(value);
  }  set member(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[member] = this.constructor.toArray(sanitized);
  }

  get member() {
    let value = this[member];
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
  }  set numberOfEmployees(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[numberOfEmployees] = this.constructor.toArray(sanitized);
  }

  get numberOfEmployees() {
    let value = this[numberOfEmployees];
    return this.constructor.fromArray(value);
  }  set owns(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OwnershipInfo','Product');
    this[owns] = this.constructor.toArray(sanitized);
  }

  get owns() {
    let value = this[owns];
    return this.constructor.fromArray(value);
  }  set parentOrganization(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[parentOrganization] = this.constructor.toArray(sanitized);
  }

  get parentOrganization() {
    let value = this[parentOrganization];
    return this.constructor.fromArray(value);
  }  set review(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Review');
    this[review] = this.constructor.toArray(sanitized);
  }

  get review() {
    let value = this[review];
    return this.constructor.fromArray(value);
  }  set seeks(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Demand');
    this[seeks] = this.constructor.toArray(sanitized);
  }

  get seeks() {
    let value = this[seeks];
    return this.constructor.fromArray(value);
  }  set subOrganization(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[subOrganization] = this.constructor.toArray(sanitized);
  }

  get subOrganization() {
    let value = this[subOrganization];
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
  }

}

export default Organization;
