/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AnatomicalStructure from './AnatomicalStructure';

const _debug = debug('moshi:classes:Nerve');
const branch = Symbol.for('branch');
const nerveMotor = Symbol.for('nerveMotor');
const sensoryUnit = Symbol.for('sensoryUnit');
const sourcedFrom = Symbol.for('sourcedFrom');


/**
 * A common pathway for the electrochemical nerve impulses that are transmitted along each of the axons.
 */
class Nerve extends AnatomicalStructure {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Nerve';
  }

  set branch(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalStructure');
    this[branch] = this.constructor.toArray(sanitized);
  }

  get branch() {
    let value = this[branch];
    return this.constructor.fromArray(value);
  }  set nerveMotor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Muscle');
    this[nerveMotor] = this.constructor.toArray(sanitized);
  }

  get nerveMotor() {
    let value = this[nerveMotor];
    return this.constructor.fromArray(value);
  }  set sensoryUnit(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SuperficialAnatomy','AnatomicalStructure');
    this[sensoryUnit] = this.constructor.toArray(sanitized);
  }

  get sensoryUnit() {
    let value = this[sensoryUnit];
    return this.constructor.fromArray(value);
  }  set sourcedFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BrainStructure');
    this[sourcedFrom] = this.constructor.toArray(sanitized);
  }

  get sourcedFrom() {
    let value = this[sourcedFrom];
    return this.constructor.fromArray(value);
  }

}

export default Nerve;
