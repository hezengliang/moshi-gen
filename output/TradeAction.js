/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Action from './Action';

const _debug = debug('moshi:classes:TradeAction');
const price = Symbol.for('price');
const priceSpecification = Symbol.for('priceSpecification');


/**
 * The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment.
 */
class TradeAction extends Action {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TradeAction';
  }

  set price(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','Number');
    this[price] = this.constructor.toArray(sanitized);
  }

  get price() {
    let value = this[price];
    return this.constructor.fromArray(value);
  }  set priceSpecification(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PriceSpecification');
    this[priceSpecification] = this.constructor.toArray(sanitized);
  }

  get priceSpecification() {
    let value = this[priceSpecification];
    return this.constructor.fromArray(value);
  }

}

export default TradeAction;
