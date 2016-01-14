/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ContactPoint from './ContactPoint';

const _debug = debug('moshi:classes:PostalAddress');
const addressCountry = Symbol.for('addressCountry');
const addressLocality = Symbol.for('addressLocality');
const addressRegion = Symbol.for('addressRegion');
const postOfficeBoxNumber = Symbol.for('postOfficeBoxNumber');
const postalCode = Symbol.for('postalCode');
const streetAddress = Symbol.for('streetAddress');


/**
 * The mailing address.
 */
class PostalAddress extends ContactPoint {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PostalAddress';
  }

  set addressCountry(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Country','Text');
    this[addressCountry] = this.constructor.toArray(sanitized);
  }

  get addressCountry() {
    let value = this[addressCountry];
    return this.constructor.fromArray(value);
  }  set addressLocality(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[addressLocality] = this.constructor.toArray(sanitized);
  }

  get addressLocality() {
    let value = this[addressLocality];
    return this.constructor.fromArray(value);
  }  set addressRegion(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[addressRegion] = this.constructor.toArray(sanitized);
  }

  get addressRegion() {
    let value = this[addressRegion];
    return this.constructor.fromArray(value);
  }  set postOfficeBoxNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[postOfficeBoxNumber] = this.constructor.toArray(sanitized);
  }

  get postOfficeBoxNumber() {
    let value = this[postOfficeBoxNumber];
    return this.constructor.fromArray(value);
  }  set postalCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[postalCode] = this.constructor.toArray(sanitized);
  }

  get postalCode() {
    let value = this[postalCode];
    return this.constructor.fromArray(value);
  }  set streetAddress(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[streetAddress] = this.constructor.toArray(sanitized);
  }

  get streetAddress() {
    let value = this[streetAddress];
    return this.constructor.fromArray(value);
  }

}

export default PostalAddress;
