/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:QuantitativeValue');
const additionalProperty = Symbol.for('additionalProperty');
const maxValue = Symbol.for('maxValue');
const minValue = Symbol.for('minValue');
const unitCode = Symbol.for('unitCode');
const unitText = Symbol.for('unitText');
const value = Symbol.for('value');
const valueReference = Symbol.for('valueReference');


/**
 * A point value or interval for product characteristics and other purposes.
 */
class QuantitativeValue extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'QuantitativeValue';
  }

  set additionalProperty(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PropertyValue');
    this[additionalProperty] = this.constructor.toArray(sanitized);
  }

  get additionalProperty() {
    let value = this[additionalProperty];
    return this.constructor.fromArray(value);
  }  set maxValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[maxValue] = this.constructor.toArray(sanitized);
  }

  get maxValue() {
    let value = this[maxValue];
    return this.constructor.fromArray(value);
  }  set minValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[minValue] = this.constructor.toArray(sanitized);
  }

  get minValue() {
    let value = this[minValue];
    return this.constructor.fromArray(value);
  }  set unitCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','URL');
    this[unitCode] = this.constructor.toArray(sanitized);
  }

  get unitCode() {
    let value = this[unitCode];
    return this.constructor.fromArray(value);
  }  set unitText(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[unitText] = this.constructor.toArray(sanitized);
  }

  get unitText() {
    let value = this[unitText];
    return this.constructor.fromArray(value);
  }  set value(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','StructuredValue','Boolean','Text');
    this[value] = this.constructor.toArray(sanitized);
  }

  get value() {
    let value = this[value];
    return this.constructor.fromArray(value);
  }  set valueReference(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue','Enumeration','StructuredValue','QualitativeValue','PropertyValue');
    this[valueReference] = this.constructor.toArray(sanitized);
  }

  get valueReference() {
    let value = this[valueReference];
    return this.constructor.fromArray(value);
  }

}

export default QuantitativeValue;
