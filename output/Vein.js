/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Vessel from './Vessel';

const _debug = debug('moshi:classes:Vein');
const drainsTo = Symbol.for('drainsTo');
const regionDrained = Symbol.for('regionDrained');
const tributary = Symbol.for('tributary');


/**
 * A type of blood vessel that specifically carries blood to the heart.
 */
class Vein extends Vessel {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Vein';
  }

  set drainsTo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Vessel');
    this[drainsTo] = this.constructor.toArray(sanitized);
  }

  get drainsTo() {
    let value = this[drainsTo];
    return this.constructor.fromArray(value);
  }  set regionDrained(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalSystem','AnatomicalStructure');
    this[regionDrained] = this.constructor.toArray(sanitized);
  }

  get regionDrained() {
    let value = this[regionDrained];
    return this.constructor.fromArray(value);
  }  set tributary(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalStructure');
    this[tributary] = this.constructor.toArray(sanitized);
  }

  get tributary() {
    let value = this[tributary];
    return this.constructor.fromArray(value);
  }

}

export default Vein;
