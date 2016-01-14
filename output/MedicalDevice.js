/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:MedicalDevice');
const adverseOutcome = Symbol.for('adverseOutcome');
const contraindication = Symbol.for('contraindication');
const indication = Symbol.for('indication');
const postOp = Symbol.for('postOp');
const preOp = Symbol.for('preOp');
const procedure = Symbol.for('procedure');
const purpose = Symbol.for('purpose');
const seriousAdverseOutcome = Symbol.for('seriousAdverseOutcome');


/**
 * Any object used in a medical capacity, such as to diagnose or treat a patient.
 */
class MedicalDevice extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalDevice';
  }

  set adverseOutcome(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalEntity');
    this[adverseOutcome] = this.constructor.toArray(sanitized);
  }

  get adverseOutcome() {
    let value = this[adverseOutcome];
    return this.constructor.fromArray(value);
  }  set contraindication(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalContraindication');
    this[contraindication] = this.constructor.toArray(sanitized);
  }

  get contraindication() {
    let value = this[contraindication];
    return this.constructor.fromArray(value);
  }  set indication(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalIndication');
    this[indication] = this.constructor.toArray(sanitized);
  }

  get indication() {
    let value = this[indication];
    return this.constructor.fromArray(value);
  }  set postOp(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[postOp] = this.constructor.toArray(sanitized);
  }

  get postOp() {
    let value = this[postOp];
    return this.constructor.fromArray(value);
  }  set preOp(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[preOp] = this.constructor.toArray(sanitized);
  }

  get preOp() {
    let value = this[preOp];
    return this.constructor.fromArray(value);
  }  set procedure(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[procedure] = this.constructor.toArray(sanitized);
  }

  get procedure() {
    let value = this[procedure];
    return this.constructor.fromArray(value);
  }  set purpose(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalDevicePurpose','Thing');
    this[purpose] = this.constructor.toArray(sanitized);
  }

  get purpose() {
    let value = this[purpose];
    return this.constructor.fromArray(value);
  }  set seriousAdverseOutcome(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalEntity');
    this[seriousAdverseOutcome] = this.constructor.toArray(sanitized);
  }

  get seriousAdverseOutcome() {
    let value = this[seriousAdverseOutcome];
    return this.constructor.fromArray(value);
  }

}

export default MedicalDevice;
