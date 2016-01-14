/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AnatomicalStructure from './AnatomicalStructure';

const _debug = debug('moshi:classes:Muscle');
const antagonist = Symbol.for('antagonist');
const bloodSupply = Symbol.for('bloodSupply');
const insertion = Symbol.for('insertion');
const muscleAction = Symbol.for('muscleAction');
const nerve = Symbol.for('nerve');
const origin = Symbol.for('origin');


/**
 * A muscle is an anatomical structure consisting of a contractile form of tissue that animals use to effect movement.
 */
class Muscle extends AnatomicalStructure {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Muscle';
  }

  set antagonist(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Muscle');
    this[antagonist] = this.constructor.toArray(sanitized);
  }

  get antagonist() {
    let value = this[antagonist];
    return this.constructor.fromArray(value);
  }  set bloodSupply(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Vessel');
    this[bloodSupply] = this.constructor.toArray(sanitized);
  }

  get bloodSupply() {
    let value = this[bloodSupply];
    return this.constructor.fromArray(value);
  }  set insertion(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalStructure');
    this[insertion] = this.constructor.toArray(sanitized);
  }

  get insertion() {
    let value = this[insertion];
    return this.constructor.fromArray(value);
  }  set muscleAction(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[muscleAction] = this.constructor.toArray(sanitized);
  }

  get muscleAction() {
    let value = this[muscleAction];
    return this.constructor.fromArray(value);
  }  set nerve(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Nerve');
    this[nerve] = this.constructor.toArray(sanitized);
  }

  get nerve() {
    let value = this[nerve];
    return this.constructor.fromArray(value);
  }  set origin(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalStructure');
    this[origin] = this.constructor.toArray(sanitized);
  }

  get origin() {
    let value = this[origin];
    return this.constructor.fromArray(value);
  }

}

export default Muscle;
