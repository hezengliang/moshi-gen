/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalIntangible from './MedicalIntangible';

const _debug = debug('moshi:classes:DoseSchedule');
const doseUnit = Symbol.for('doseUnit');
const doseValue = Symbol.for('doseValue');
const frequency = Symbol.for('frequency');
const targetPopulation = Symbol.for('targetPopulation');


/**
 * A specific dosing schedule for a drug or supplement.
 */
class DoseSchedule extends MedicalIntangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DoseSchedule';
  }

  set doseUnit(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[doseUnit] = this.constructor.toArray(sanitized);
  }

  get doseUnit() {
    let value = this[doseUnit];
    return this.constructor.fromArray(value);
  }  set doseValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[doseValue] = this.constructor.toArray(sanitized);
  }

  get doseValue() {
    let value = this[doseValue];
    return this.constructor.fromArray(value);
  }  set frequency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[frequency] = this.constructor.toArray(sanitized);
  }

  get frequency() {
    let value = this[frequency];
    return this.constructor.fromArray(value);
  }  set targetPopulation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[targetPopulation] = this.constructor.toArray(sanitized);
  }

  get targetPopulation() {
    let value = this[targetPopulation];
    return this.constructor.fromArray(value);
  }

}

export default DoseSchedule;
