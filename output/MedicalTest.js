/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:MedicalTest');
const affectedBy = Symbol.for('affectedBy');
const normalRange = Symbol.for('normalRange');
const signDetected = Symbol.for('signDetected');
const usedToDiagnose = Symbol.for('usedToDiagnose');
const usesDevice = Symbol.for('usesDevice');


/**
 * Any medical test, typically performed for diagnostic purposes.
 */
class MedicalTest extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalTest';
  }

  set affectedBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Drug');
    this[affectedBy] = this.constructor.toArray(sanitized);
  }

  get affectedBy() {
    let value = this[affectedBy];
    return this.constructor.fromArray(value);
  }  set normalRange(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[normalRange] = this.constructor.toArray(sanitized);
  }

  get normalRange() {
    let value = this[normalRange];
    return this.constructor.fromArray(value);
  }  set signDetected(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalSign');
    this[signDetected] = this.constructor.toArray(sanitized);
  }

  get signDetected() {
    let value = this[signDetected];
    return this.constructor.fromArray(value);
  }  set usedToDiagnose(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalCondition');
    this[usedToDiagnose] = this.constructor.toArray(sanitized);
  }

  get usedToDiagnose() {
    let value = this[usedToDiagnose];
    return this.constructor.fromArray(value);
  }  set usesDevice(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalDevice');
    this[usesDevice] = this.constructor.toArray(sanitized);
  }

  get usesDevice() {
    let value = this[usesDevice];
    return this.constructor.fromArray(value);
  }

}

export default MedicalTest;
