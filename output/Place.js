/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Thing from './Thing';

const _debug = debug('moshi:classes:Place');
const additionalProperty = Symbol.for('additionalProperty');
const address = Symbol.for('address');
const aggregateRating = Symbol.for('aggregateRating');
const branchCode = Symbol.for('branchCode');
const containedInPlace = Symbol.for('containedInPlace');
const containsPlace = Symbol.for('containsPlace');
const event = Symbol.for('event');
const faxNumber = Symbol.for('faxNumber');
const geo = Symbol.for('geo');
const globalLocationNumber = Symbol.for('globalLocationNumber');
const hasMap = Symbol.for('hasMap');
const isicV4 = Symbol.for('isicV4');
const logo = Symbol.for('logo');
const openingHoursSpecification = Symbol.for('openingHoursSpecification');
const photo = Symbol.for('photo');
const review = Symbol.for('review');
const telephone = Symbol.for('telephone');


/**
 * Entities that have a somewhat fixed, physical extension.
 */
class Place extends Thing {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Place';
  }

  set additionalProperty(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PropertyValue');
    this[additionalProperty] = this.constructor.toArray(sanitized);
  }

  get additionalProperty() {
    let value = this[additionalProperty];
    return this.constructor.fromArray(value);
  }  set address(value) {
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
  }  set branchCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[branchCode] = this.constructor.toArray(sanitized);
  }

  get branchCode() {
    let value = this[branchCode];
    return this.constructor.fromArray(value);
  }  set containedInPlace(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[containedInPlace] = this.constructor.toArray(sanitized);
  }

  get containedInPlace() {
    let value = this[containedInPlace];
    return this.constructor.fromArray(value);
  }  set containsPlace(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[containsPlace] = this.constructor.toArray(sanitized);
  }

  get containsPlace() {
    let value = this[containsPlace];
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
  }  set geo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'GeoCoordinates','GeoShape');
    this[geo] = this.constructor.toArray(sanitized);
  }

  get geo() {
    let value = this[geo];
    return this.constructor.fromArray(value);
  }  set globalLocationNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[globalLocationNumber] = this.constructor.toArray(sanitized);
  }

  get globalLocationNumber() {
    let value = this[globalLocationNumber];
    return this.constructor.fromArray(value);
  }  set hasMap(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Map');
    this[hasMap] = this.constructor.toArray(sanitized);
  }

  get hasMap() {
    let value = this[hasMap];
    return this.constructor.fromArray(value);
  }  set isicV4(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[isicV4] = this.constructor.toArray(sanitized);
  }

  get isicV4() {
    let value = this[isicV4];
    return this.constructor.fromArray(value);
  }  set logo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','ImageObject');
    this[logo] = this.constructor.toArray(sanitized);
  }

  get logo() {
    let value = this[logo];
    return this.constructor.fromArray(value);
  }  set openingHoursSpecification(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OpeningHoursSpecification');
    this[openingHoursSpecification] = this.constructor.toArray(sanitized);
  }

  get openingHoursSpecification() {
    let value = this[openingHoursSpecification];
    return this.constructor.fromArray(value);
  }  set photo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Photograph','ImageObject');
    this[photo] = this.constructor.toArray(sanitized);
  }

  get photo() {
    let value = this[photo];
    return this.constructor.fromArray(value);
  }  set review(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Review');
    this[review] = this.constructor.toArray(sanitized);
  }

  get review() {
    let value = this[review];
    return this.constructor.fromArray(value);
  }  set telephone(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[telephone] = this.constructor.toArray(sanitized);
  }

  get telephone() {
    let value = this[telephone];
    return this.constructor.fromArray(value);
  }

}

export default Place;
