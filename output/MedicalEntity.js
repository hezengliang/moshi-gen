/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Thing from './Thing';

const _debug = debug('moshi:classes:MedicalEntity');
const code = Symbol.for('code');
const guideline = Symbol.for('guideline');
const medicineSystem = Symbol.for('medicineSystem');
const recognizingAuthority = Symbol.for('recognizingAuthority');
const relevantSpecialty = Symbol.for('relevantSpecialty');
const study = Symbol.for('study');


/**
 * The most generic type of entity related to health and the practice of medicine.
 */
class MedicalEntity extends Thing {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalEntity';
  }

  set code(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalCode');
    this[code] = this.constructor.toArray(sanitized);
  }

  get code() {
    let value = this[code];
    return this.constructor.fromArray(value);
  }  set guideline(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalGuideline');
    this[guideline] = this.constructor.toArray(sanitized);
  }

  get guideline() {
    let value = this[guideline];
    return this.constructor.fromArray(value);
  }  set medicineSystem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicineSystem');
    this[medicineSystem] = this.constructor.toArray(sanitized);
  }

  get medicineSystem() {
    let value = this[medicineSystem];
    return this.constructor.fromArray(value);
  }  set recognizingAuthority(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[recognizingAuthority] = this.constructor.toArray(sanitized);
  }

  get recognizingAuthority() {
    let value = this[recognizingAuthority];
    return this.constructor.fromArray(value);
  }  set relevantSpecialty(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalSpecialty');
    this[relevantSpecialty] = this.constructor.toArray(sanitized);
  }

  get relevantSpecialty() {
    let value = this[relevantSpecialty];
    return this.constructor.fromArray(value);
  }  set study(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalStudy');
    this[study] = this.constructor.toArray(sanitized);
  }

  get study() {
    let value = this[study];
    return this.constructor.fromArray(value);
  }

}

export default MedicalEntity;
