/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalOrganization from './MedicalOrganization';

const _debug = debug('moshi:classes:Physician');
const availableService = Symbol.for('availableService');
const hospitalAffiliation = Symbol.for('hospitalAffiliation');
const medicalSpecialty = Symbol.for('medicalSpecialty');


/**
 * A doctor's office.
 */
class Physician extends MedicalOrganization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Physician';
  }

  set availableService(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTest','MedicalTherapy','MedicalProcedure');
    this[availableService] = this.constructor.toArray(sanitized);
  }

  get availableService() {
    let value = this[availableService];
    return this.constructor.fromArray(value);
  }  set hospitalAffiliation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Hospital');
    this[hospitalAffiliation] = this.constructor.toArray(sanitized);
  }

  get hospitalAffiliation() {
    let value = this[hospitalAffiliation];
    return this.constructor.fromArray(value);
  }  set medicalSpecialty(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalSpecialty');
    this[medicalSpecialty] = this.constructor.toArray(sanitized);
  }

  get medicalSpecialty() {
    let value = this[medicalSpecialty];
    return this.constructor.fromArray(value);
  }

}

export default Physician;
