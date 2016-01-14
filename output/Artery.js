/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Vessel from './Vessel';

const _debug = debug('moshi:classes:Artery');
const arterialBranch = Symbol.for('arterialBranch');
const source = Symbol.for('source');
const supplyTo = Symbol.for('supplyTo');


/**
 * A type of blood vessel that specifically carries blood away from the heart.
 */
class Artery extends Vessel {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Artery';
  }

  set arterialBranch(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalStructure');
    this[arterialBranch] = this.constructor.toArray(sanitized);
  }

  get arterialBranch() {
    let value = this[arterialBranch];
    return this.constructor.fromArray(value);
  }  set source(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalStructure');
    this[source] = this.constructor.toArray(sanitized);
  }

  get source() {
    let value = this[source];
    return this.constructor.fromArray(value);
  }  set supplyTo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalStructure');
    this[supplyTo] = this.constructor.toArray(sanitized);
  }

  get supplyTo() {
    let value = this[supplyTo];
    return this.constructor.fromArray(value);
  }

}

export default Artery;
