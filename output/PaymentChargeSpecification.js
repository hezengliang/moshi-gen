/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PriceSpecification from './PriceSpecification';

const _debug = debug('moshi:classes:PaymentChargeSpecification');
const appliesToDeliveryMethod = Symbol.for('appliesToDeliveryMethod');
const appliesToPaymentMethod = Symbol.for('appliesToPaymentMethod');


/**
 * The costs of settling the payment using a particular payment method.
 */
class PaymentChargeSpecification extends PriceSpecification {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PaymentChargeSpecification';
  }

  set appliesToDeliveryMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DeliveryMethod');
    this[appliesToDeliveryMethod] = this.constructor.toArray(sanitized);
  }

  get appliesToDeliveryMethod() {
    let value = this[appliesToDeliveryMethod];
    return this.constructor.fromArray(value);
  }  set appliesToPaymentMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PaymentMethod');
    this[appliesToPaymentMethod] = this.constructor.toArray(sanitized);
  }

  get appliesToPaymentMethod() {
    let value = this[appliesToPaymentMethod];
    return this.constructor.fromArray(value);
  }

}

export default PaymentChargeSpecification;
