/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:PropertyValueSpecification');
const defaultValue = Symbol.for('defaultValue');
const maxValue = Symbol.for('maxValue');
const minValue = Symbol.for('minValue');
const multipleValues = Symbol.for('multipleValues');
const readonlyValue = Symbol.for('readonlyValue');
const stepValue = Symbol.for('stepValue');
const valueMaxLength = Symbol.for('valueMaxLength');
const valueMinLength = Symbol.for('valueMinLength');
const valueName = Symbol.for('valueName');
const valuePattern = Symbol.for('valuePattern');
const valueRequired = Symbol.for('valueRequired');


/**
 * A Property value specification.
 */
class PropertyValueSpecification extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PropertyValueSpecification';
  }

  set defaultValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','Thing');
    this[defaultValue] = this.constructor.toArray(sanitized);
  }

  get defaultValue() {
    let value = this[defaultValue];
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
  }  set multipleValues(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[multipleValues] = this.constructor.toArray(sanitized);
  }

  get multipleValues() {
    let value = this[multipleValues];
    return this.constructor.fromArray(value);
  }  set readonlyValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[readonlyValue] = this.constructor.toArray(sanitized);
  }

  get readonlyValue() {
    let value = this[readonlyValue];
    return this.constructor.fromArray(value);
  }  set stepValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[stepValue] = this.constructor.toArray(sanitized);
  }

  get stepValue() {
    let value = this[stepValue];
    return this.constructor.fromArray(value);
  }  set valueMaxLength(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[valueMaxLength] = this.constructor.toArray(sanitized);
  }

  get valueMaxLength() {
    let value = this[valueMaxLength];
    return this.constructor.fromArray(value);
  }  set valueMinLength(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[valueMinLength] = this.constructor.toArray(sanitized);
  }

  get valueMinLength() {
    let value = this[valueMinLength];
    return this.constructor.fromArray(value);
  }  set valueName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[valueName] = this.constructor.toArray(sanitized);
  }

  get valueName() {
    let value = this[valueName];
    return this.constructor.fromArray(value);
  }  set valuePattern(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[valuePattern] = this.constructor.toArray(sanitized);
  }

  get valuePattern() {
    let value = this[valuePattern];
    return this.constructor.fromArray(value);
  }  set valueRequired(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[valueRequired] = this.constructor.toArray(sanitized);
  }

  get valueRequired() {
    let value = this[valueRequired];
    return this.constructor.fromArray(value);
  }

}

export default PropertyValueSpecification;
