/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:MedicalProcedure');
const followup = Symbol.for('followup');
const howPerformed = Symbol.for('howPerformed');
const preparation = Symbol.for('preparation');
const procedureType = Symbol.for('procedureType');


/**
 * A process of care used in either a diagnostic, therapeutic, or palliative capacity that relies on invasive (surgical), non-invasive, or percutaneous techniques.
 */
class MedicalProcedure extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalProcedure';
  }

  set followup(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[followup] = this.constructor.toArray(sanitized);
  }

  get followup() {
    let value = this[followup];
    return this.constructor.fromArray(value);
  }  set howPerformed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[howPerformed] = this.constructor.toArray(sanitized);
  }

  get howPerformed() {
    let value = this[howPerformed];
    return this.constructor.fromArray(value);
  }  set preparation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[preparation] = this.constructor.toArray(sanitized);
  }

  get preparation() {
    let value = this[preparation];
    return this.constructor.fromArray(value);
  }  set procedureType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalProcedureType');
    this[procedureType] = this.constructor.toArray(sanitized);
  }

  get procedureType() {
    let value = this[procedureType];
    return this.constructor.fromArray(value);
  }

}

export default MedicalProcedure;
