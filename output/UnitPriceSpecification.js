/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PriceSpecification from './PriceSpecification';

const _debug = debug('moshi:classes:UnitPriceSpecification');
const billingIncrement = Symbol.for('billingIncrement');
const priceType = Symbol.for('priceType');
const unitCode = Symbol.for('unitCode');
const unitText = Symbol.for('unitText');


/**
 * The price asked for a given offer by the respective organization or person.
 */
class UnitPriceSpecification extends PriceSpecification {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'UnitPriceSpecification';
  }

  set billingIncrement(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[billingIncrement] = this.constructor.toArray(sanitized);
  }

  get billingIncrement() {
    let value = this[billingIncrement];
    return this.constructor.fromArray(value);
  }  set priceType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[priceType] = this.constructor.toArray(sanitized);
  }

  get priceType() {
    let value = this[priceType];
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

export default UnitPriceSpecification;
