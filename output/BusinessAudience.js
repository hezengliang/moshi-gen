/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Audience from './Audience';

const _debug = debug('moshi:classes:BusinessAudience');
const numberOfEmployees = Symbol.for('numberOfEmployees');
const yearlyRevenue = Symbol.for('yearlyRevenue');
const yearsInOperation = Symbol.for('yearsInOperation');


/**
 * A set of characteristics belonging to businesses, e.g. who compose an item's target audience.
 */
class BusinessAudience extends Audience {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BusinessAudience';
  }

  set numberOfEmployees(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[numberOfEmployees] = this.constructor.toArray(sanitized);
  }

  get numberOfEmployees() {
    let value = this[numberOfEmployees];
    return this.constructor.fromArray(value);
  }  set yearlyRevenue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[yearlyRevenue] = this.constructor.toArray(sanitized);
  }

  get yearlyRevenue() {
    let value = this[yearlyRevenue];
    return this.constructor.fromArray(value);
  }  set yearsInOperation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[yearsInOperation] = this.constructor.toArray(sanitized);
  }

  get yearsInOperation() {
    let value = this[yearsInOperation];
    return this.constructor.fromArray(value);
  }

}

export default BusinessAudience;
