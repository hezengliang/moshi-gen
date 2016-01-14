/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalSignOrSymptom from './MedicalSignOrSymptom';

const _debug = debug('moshi:classes:MedicalSign');
const identifyingExam = Symbol.for('identifyingExam');
const identifyingTest = Symbol.for('identifyingTest');


/**
 * Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination.
 */
class MedicalSign extends MedicalSignOrSymptom {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalSign';
  }

  set identifyingExam(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PhysicalExam');
    this[identifyingExam] = this.constructor.toArray(sanitized);
  }

  get identifyingExam() {
    let value = this[identifyingExam];
    return this.constructor.fromArray(value);
  }  set identifyingTest(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTest');
    this[identifyingTest] = this.constructor.toArray(sanitized);
  }

  get identifyingTest() {
    let value = this[identifyingTest];
    return this.constructor.fromArray(value);
  }

}

export default MedicalSign;
