/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CivicStructure from './CivicStructure';

const _debug = debug('moshi:classes:Airport');
const iataCode = Symbol.for('iataCode');
const icaoCode = Symbol.for('icaoCode');


/**
 * An airport.
 */
class Airport extends CivicStructure {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Airport';
  }

  set iataCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[iataCode] = this.constructor.toArray(sanitized);
  }

  get iataCode() {
    let value = this[iataCode];
    return this.constructor.fromArray(value);
  }  set icaoCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[icaoCode] = this.constructor.toArray(sanitized);
  }

  get icaoCode() {
    let value = this[icaoCode];
    return this.constructor.fromArray(value);
  }

}

export default Airport;
