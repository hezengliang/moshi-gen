/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:MedicalSignOrSymptom');
const cause = Symbol.for('cause');
const possibleTreatment = Symbol.for('possibleTreatment');


/**
 * Any indication of the existence of a medical condition or disease.
 */
class MedicalSignOrSymptom extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalSignOrSymptom';
  }

  set cause(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalCause');
    this[cause] = this.constructor.toArray(sanitized);
  }

  get cause() {
    let value = this[cause];
    return this.constructor.fromArray(value);
  }  set possibleTreatment(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTherapy');
    this[possibleTreatment] = this.constructor.toArray(sanitized);
  }

  get possibleTreatment() {
    let value = this[possibleTreatment];
    return this.constructor.fromArray(value);
  }

}

export default MedicalSignOrSymptom;
