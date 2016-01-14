/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:TypeAndQuantityNode');
const amountOfThisGood = Symbol.for('amountOfThisGood');
const businessFunction = Symbol.for('businessFunction');
const typeOfGood = Symbol.for('typeOfGood');
const unitCode = Symbol.for('unitCode');
const unitText = Symbol.for('unitText');


/**
 * A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.
 */
class TypeAndQuantityNode extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TypeAndQuantityNode';
  }

  set amountOfThisGood(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[amountOfThisGood] = this.constructor.toArray(sanitized);
  }

  get amountOfThisGood() {
    let value = this[amountOfThisGood];
    return this.constructor.fromArray(value);
  }  set businessFunction(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BusinessFunction');
    this[businessFunction] = this.constructor.toArray(sanitized);
  }

  get businessFunction() {
    let value = this[businessFunction];
    return this.constructor.fromArray(value);
  }  set typeOfGood(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Product');
    this[typeOfGood] = this.constructor.toArray(sanitized);
  }

  get typeOfGood() {
    let value = this[typeOfGood];
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
  }

}

export default TypeAndQuantityNode;
