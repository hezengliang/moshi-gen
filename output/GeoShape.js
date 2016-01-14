/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:GeoShape');
const address = Symbol.for('address');
const addressCountry = Symbol.for('addressCountry');
const box = Symbol.for('box');
const circle = Symbol.for('circle');
const elevation = Symbol.for('elevation');
const line = Symbol.for('line');
const polygon = Symbol.for('polygon');
const postalCode = Symbol.for('postalCode');


/**
 * The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.
 */
class GeoShape extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'GeoShape';
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
  }  set box(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[box] = this.constructor.toArray(sanitized);
  }

  get box() {
    let value = this[box];
    return this.constructor.fromArray(value);
  }  set circle(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[circle] = this.constructor.toArray(sanitized);
  }

  get circle() {
    let value = this[circle];
    return this.constructor.fromArray(value);
  }  set elevation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[elevation] = this.constructor.toArray(sanitized);
  }

  get elevation() {
    let value = this[elevation];
    return this.constructor.fromArray(value);
  }  set line(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[line] = this.constructor.toArray(sanitized);
  }

  get line() {
    let value = this[line];
    return this.constructor.fromArray(value);
  }  set polygon(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[polygon] = this.constructor.toArray(sanitized);
  }

  get polygon() {
    let value = this[polygon];
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

export default GeoShape;
