/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Organization from './Organization';

const _debug = debug('moshi:classes:LocalBusiness');
const branchCode = Symbol.for('branchCode');
const currenciesAccepted = Symbol.for('currenciesAccepted');
const openingHours = Symbol.for('openingHours');
const paymentAccepted = Symbol.for('paymentAccepted');
const priceRange = Symbol.for('priceRange');


/**
 * A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.
 */
class LocalBusiness extends Organization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'LocalBusiness';
  }

  set branchCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[branchCode] = this.constructor.toArray(sanitized);
  }

  get branchCode() {
    let value = this[branchCode];
    return this.constructor.fromArray(value);
  }  set currenciesAccepted(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[currenciesAccepted] = this.constructor.toArray(sanitized);
  }

  get currenciesAccepted() {
    let value = this[currenciesAccepted];
    return this.constructor.fromArray(value);
  }  set openingHours(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[openingHours] = this.constructor.toArray(sanitized);
  }

  get openingHours() {
    let value = this[openingHours];
    return this.constructor.fromArray(value);
  }  set paymentAccepted(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[paymentAccepted] = this.constructor.toArray(sanitized);
  }

  get paymentAccepted() {
    let value = this[paymentAccepted];
    return this.constructor.fromArray(value);
  }  set priceRange(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[priceRange] = this.constructor.toArray(sanitized);
  }

  get priceRange() {
    let value = this[priceRange];
    return this.constructor.fromArray(value);
  }

}

export default LocalBusiness;
