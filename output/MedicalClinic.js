/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalOrganization from './MedicalOrganization';

const _debug = debug('moshi:classes:MedicalClinic');
const availableService = Symbol.for('availableService');
const medicalSpecialty = Symbol.for('medicalSpecialty');


/**
 * A medical clinic.
 */
class MedicalClinic extends MedicalOrganization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalClinic';
  }

  set availableService(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalProcedure','MedicalTest','MedicalTherapy');
    this[availableService] = this.constructor.toArray(sanitized);
  }

  get availableService() {
    let value = this[availableService];
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

export default MedicalClinic;
