/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Invoice');
const accountId = Symbol.for('accountId');
const billingPeriod = Symbol.for('billingPeriod');
const broker = Symbol.for('broker');
const category = Symbol.for('category');
const confirmationNumber = Symbol.for('confirmationNumber');
const customer = Symbol.for('customer');
const minimumPaymentDue = Symbol.for('minimumPaymentDue');
const paymentDueDate = Symbol.for('paymentDueDate');
const paymentMethod = Symbol.for('paymentMethod');
const paymentMethodId = Symbol.for('paymentMethodId');
const paymentStatus = Symbol.for('paymentStatus');
const provider = Symbol.for('provider');
const referencesOrder = Symbol.for('referencesOrder');
const scheduledPaymentDate = Symbol.for('scheduledPaymentDate');
const totalPaymentDue = Symbol.for('totalPaymentDue');


/**
 * A statement of the money due for goods or services; a bill.
 */
class Invoice extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Invoice';
  }

  set accountId(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[accountId] = this.constructor.toArray(sanitized);
  }

  get accountId() {
    let value = this[accountId];
    return this.constructor.fromArray(value);
  }  set billingPeriod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[billingPeriod] = this.constructor.toArray(sanitized);
  }

  get billingPeriod() {
    let value = this[billingPeriod];
    return this.constructor.fromArray(value);
  }  set broker(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[broker] = this.constructor.toArray(sanitized);
  }

  get broker() {
    let value = this[broker];
    return this.constructor.fromArray(value);
  }  set category(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing','Text','PhysicalActivityCategory');
    this[category] = this.constructor.toArray(sanitized);
  }

  get category() {
    let value = this[category];
    return this.constructor.fromArray(value);
  }  set confirmationNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[confirmationNumber] = this.constructor.toArray(sanitized);
  }

  get confirmationNumber() {
    let value = this[confirmationNumber];
    return this.constructor.fromArray(value);
  }  set customer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[customer] = this.constructor.toArray(sanitized);
  }

  get customer() {
    let value = this[customer];
    return this.constructor.fromArray(value);
  }  set minimumPaymentDue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PriceSpecification');
    this[minimumPaymentDue] = this.constructor.toArray(sanitized);
  }

  get minimumPaymentDue() {
    let value = this[minimumPaymentDue];
    return this.constructor.fromArray(value);
  }  set paymentDueDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[paymentDueDate] = this.constructor.toArray(sanitized);
  }

  get paymentDueDate() {
    let value = this[paymentDueDate];
    return this.constructor.fromArray(value);
  }  set paymentMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PaymentMethod');
    this[paymentMethod] = this.constructor.toArray(sanitized);
  }

  get paymentMethod() {
    let value = this[paymentMethod];
    return this.constructor.fromArray(value);
  }  set paymentMethodId(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[paymentMethodId] = this.constructor.toArray(sanitized);
  }

  get paymentMethodId() {
    let value = this[paymentMethodId];
    return this.constructor.fromArray(value);
  }  set paymentStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PaymentStatusType','Text');
    this[paymentStatus] = this.constructor.toArray(sanitized);
  }

  get paymentStatus() {
    let value = this[paymentStatus];
    return this.constructor.fromArray(value);
  }  set provider(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[provider] = this.constructor.toArray(sanitized);
  }

  get provider() {
    let value = this[provider];
    return this.constructor.fromArray(value);
  }  set referencesOrder(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Order');
    this[referencesOrder] = this.constructor.toArray(sanitized);
  }

  get referencesOrder() {
    let value = this[referencesOrder];
    return this.constructor.fromArray(value);
  }  set scheduledPaymentDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[scheduledPaymentDate] = this.constructor.toArray(sanitized);
  }

  get scheduledPaymentDate() {
    let value = this[scheduledPaymentDate];
    return this.constructor.fromArray(value);
  }  set totalPaymentDue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PriceSpecification');
    this[totalPaymentDue] = this.constructor.toArray(sanitized);
  }

  get totalPaymentDue() {
    let value = this[totalPaymentDue];
    return this.constructor.fromArray(value);
  }

}

export default Invoice;
