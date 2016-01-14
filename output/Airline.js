/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Organization from './Organization';

const _debug = debug('moshi:classes:Airline');
const boardingPolicy = Symbol.for('boardingPolicy');
const iataCode = Symbol.for('iataCode');


/**
 * An organization that provides flights for passengers.
 */
class Airline extends Organization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Airline';
  }

  set boardingPolicy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BoardingPolicyType');
    this[boardingPolicy] = this.constructor.toArray(sanitized);
  }

  get boardingPolicy() {
    let value = this[boardingPolicy];
    return this.constructor.fromArray(value);
  }  set iataCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[iataCode] = this.constructor.toArray(sanitized);
  }

  get iataCode() {
    let value = this[iataCode];
    return this.constructor.fromArray(value);
  }

}

export default Airline;
