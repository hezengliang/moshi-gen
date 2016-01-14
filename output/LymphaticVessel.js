/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Vessel from './Vessel';

const _debug = debug('moshi:classes:LymphaticVessel');
const originatesFrom = Symbol.for('originatesFrom');
const regionDrained = Symbol.for('regionDrained');
const runsTo = Symbol.for('runsTo');


/**
 * A type of blood vessel that specifically carries lymph fluid unidirectionally toward the heart.
 */
class LymphaticVessel extends Vessel {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'LymphaticVessel';
  }

  set originatesFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Vessel');
    this[originatesFrom] = this.constructor.toArray(sanitized);
  }

  get originatesFrom() {
    let value = this[originatesFrom];
    return this.constructor.fromArray(value);
  }  set regionDrained(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalSystem','AnatomicalStructure');
    this[regionDrained] = this.constructor.toArray(sanitized);
  }

  get regionDrained() {
    let value = this[regionDrained];
    return this.constructor.fromArray(value);
  }  set runsTo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Vessel');
    this[runsTo] = this.constructor.toArray(sanitized);
  }

  get runsTo() {
    let value = this[runsTo];
    return this.constructor.fromArray(value);
  }

}

export default LymphaticVessel;
