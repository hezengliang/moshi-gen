/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:GeoCoordinates');
const address = Symbol.for('address');
const addressCountry = Symbol.for('addressCountry');
const elevation = Symbol.for('elevation');
const latitude = Symbol.for('latitude');
const longitude = Symbol.for('longitude');
const postalCode = Symbol.for('postalCode');


/**
 * The geographic coordinates of a place or event.
 */
class GeoCoordinates extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'GeoCoordinates';
  }

  set address(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','PostalAddress');
    this[address] = this.constructor.toArray(sanitized);
  }

  get address() {
    let value = this[address];
    return this.constructor.fromArray(value);
  }  set addressCountry(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Country','Text');
    this[addressCountry] = this.constructor.toArray(sanitized);
  }

  get addressCountry() {
    let value = this[addressCountry];
    return this.constructor.fromArray(value);
  }  set elevation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[elevation] = this.constructor.toArray(sanitized);
  }

  get elevation() {
    let value = this[elevation];
    return this.constructor.fromArray(value);
  }  set latitude(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[latitude] = this.constructor.toArray(sanitized);
  }

  get latitude() {
    let value = this[latitude];
    return this.constructor.fromArray(value);
  }  set longitude(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[longitude] = this.constructor.toArray(sanitized);
  }

  get longitude() {
    let value = this[longitude];
    return this.constructor.fromArray(value);
  }  set postalCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[postalCode] = this.constructor.toArray(sanitized);
  }

  get postalCode() {
    let value = this[postalCode];
    return this.constructor.fromArray(value);
  }

}

export default GeoCoordinates;
