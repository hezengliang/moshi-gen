/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TradeAction from './TradeAction';

const _debug = debug('moshi:classes:OrderAction');
const deliveryMethod = Symbol.for('deliveryMethod');


/**
 * An agent orders an object/product/service to be delivered/sent.
 */
class OrderAction extends TradeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'OrderAction';
  }

  set deliveryMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DeliveryMethod');
    this[deliveryMethod] = this.constructor.toArray(sanitized);
  }

  get deliveryMethod() {
    let value = this[deliveryMethod];
    return this.constructor.fromArray(value);
  }

}

export default OrderAction;
