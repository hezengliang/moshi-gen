/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Enumeration from './Enumeration';

const _debug = debug('moshi:classes:QualitativeValue');
const additionalProperty = Symbol.for('additionalProperty');
const equal = Symbol.for('equal');
const greater = Symbol.for('greater');
const greaterOrEqual = Symbol.for('greaterOrEqual');
const lesser = Symbol.for('lesser');
const lesserOrEqual = Symbol.for('lesserOrEqual');
const nonEqual = Symbol.for('nonEqual');
const valueReference = Symbol.for('valueReference');


/**
 * A predefined value for a product characteristic, e.g. the power cord plug type "US" or the garment sizes "S", "M", "L", and "XL".
 */
class QualitativeValue extends Enumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'QualitativeValue';
  }

  set additionalProperty(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PropertyValue');
    this[additionalProperty] = this.constructor.toArray(sanitized);
  }

  get additionalProperty() {
    let value = this[additionalProperty];
    return this.constructor.fromArray(value);
  }  set equal(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue');
    this[equal] = this.constructor.toArray(sanitized);
  }

  get equal() {
    let value = this[equal];
    return this.constructor.fromArray(value);
  }  set greater(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue');
    this[greater] = this.constructor.toArray(sanitized);
  }

  get greater() {
    let value = this[greater];
    return this.constructor.fromArray(value);
  }  set greaterOrEqual(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue');
    this[greaterOrEqual] = this.constructor.toArray(sanitized);
  }

  get greaterOrEqual() {
    let value = this[greaterOrEqual];
    return this.constructor.fromArray(value);
  }  set lesser(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue');
    this[lesser] = this.constructor.toArray(sanitized);
  }

  get lesser() {
    let value = this[lesser];
    return this.constructor.fromArray(value);
  }  set lesserOrEqual(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue');
    this[lesserOrEqual] = this.constructor.toArray(sanitized);
  }

  get lesserOrEqual() {
    let value = this[lesserOrEqual];
    return this.constructor.fromArray(value);
  }  set nonEqual(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue');
    this[nonEqual] = this.constructor.toArray(sanitized);
  }

  get nonEqual() {
    let value = this[nonEqual];
    return this.constructor.fromArray(value);
  }  set valueReference(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Enumeration','StructuredValue','PropertyValue','QualitativeValue','QuantitativeValue');
    this[valueReference] = this.constructor.toArray(sanitized);
  }

  get valueReference() {
    let value = this[valueReference];
    return this.constructor.fromArray(value);
  }

}

export default QualitativeValue;
