/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:OrderItem');
const orderDelivery = Symbol.for('orderDelivery');
const orderItemNumber = Symbol.for('orderItemNumber');
const orderItemStatus = Symbol.for('orderItemStatus');
const orderQuantity = Symbol.for('orderQuantity');
const orderedItem = Symbol.for('orderedItem');


/**
 * An order item is a line of an order. It includes the quantity and shipping details of a bought offer.
 */
class OrderItem extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'OrderItem';
  }

  set orderDelivery(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ParcelDelivery');
    this[orderDelivery] = this.constructor.toArray(sanitized);
  }

  get orderDelivery() {
    let value = this[orderDelivery];
    return this.constructor.fromArray(value);
  }  set orderItemNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[orderItemNumber] = this.constructor.toArray(sanitized);
  }

  get orderItemNumber() {
    let value = this[orderItemNumber];
    return this.constructor.fromArray(value);
  }  set orderItemStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OrderStatus');
    this[orderItemStatus] = this.constructor.toArray(sanitized);
  }

  get orderItemStatus() {
    let value = this[orderItemStatus];
    return this.constructor.fromArray(value);
  }  set orderQuantity(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[orderQuantity] = this.constructor.toArray(sanitized);
  }

  get orderQuantity() {
    let value = this[orderQuantity];
    return this.constructor.fromArray(value);
  }  set orderedItem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OrderItem','Product');
    this[orderedItem] = this.constructor.toArray(sanitized);
  }

  get orderedItem() {
    let value = this[orderedItem];
    return this.constructor.fromArray(value);
  }

}

export default OrderItem;
