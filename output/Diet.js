/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Diet');
const dietFeatures = Symbol.for('dietFeatures');
const endorsers = Symbol.for('endorsers');
const expertConsiderations = Symbol.for('expertConsiderations');
const overview = Symbol.for('overview');
const physiologicalBenefits = Symbol.for('physiologicalBenefits');
const proprietaryName = Symbol.for('proprietaryName');
const risks = Symbol.for('risks');


/**
 * A strategy of regulating the intake of food to achieve or maintain a specific health-related goal.
 */
class Diet extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Diet';
  }

  set dietFeatures(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[dietFeatures] = this.constructor.toArray(sanitized);
  }

  get dietFeatures() {
    let value = this[dietFeatures];
    return this.constructor.fromArray(value);
  }  set endorsers(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[endorsers] = this.constructor.toArray(sanitized);
  }

  get endorsers() {
    let value = this[endorsers];
    return this.constructor.fromArray(value);
  }  set expertConsiderations(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[expertConsiderations] = this.constructor.toArray(sanitized);
  }

  get expertConsiderations() {
    let value = this[expertConsiderations];
    return this.constructor.fromArray(value);
  }  set overview(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[overview] = this.constructor.toArray(sanitized);
  }

  get overview() {
    let value = this[overview];
    return this.constructor.fromArray(value);
  }  set physiologicalBenefits(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[physiologicalBenefits] = this.constructor.toArray(sanitized);
  }

  get physiologicalBenefits() {
    let value = this[physiologicalBenefits];
    return this.constructor.fromArray(value);
  }  set proprietaryName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[proprietaryName] = this.constructor.toArray(sanitized);
  }

  get proprietaryName() {
    let value = this[proprietaryName];
    return this.constructor.fromArray(value);
  }  set risks(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[risks] = this.constructor.toArray(sanitized);
  }

  get risks() {
    let value = this[risks];
    return this.constructor.fromArray(value);
  }

}

export default Diet;
