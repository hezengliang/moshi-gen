/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:DatedMoneySpecification');
const amount = Symbol.for('amount');
const currency = Symbol.for('currency');
const endDate = Symbol.for('endDate');
const startDate = Symbol.for('startDate');


/**
 * A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time.
 */
class DatedMoneySpecification extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DatedMoneySpecification';
  }

  set amount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[amount] = this.constructor.toArray(sanitized);
  }

  get amount() {
    let value = this[amount];
    return this.constructor.fromArray(value);
  }  set currency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[currency] = this.constructor.toArray(sanitized);
  }

  get currency() {
    let value = this[currency];
    return this.constructor.fromArray(value);
  }  set endDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[endDate] = this.constructor.toArray(sanitized);
  }

  get endDate() {
    let value = this[endDate];
    return this.constructor.fromArray(value);
  }  set startDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[startDate] = this.constructor.toArray(sanitized);
  }

  get startDate() {
    let value = this[startDate];
    return this.constructor.fromArray(value);
  }

}

export default DatedMoneySpecification;
