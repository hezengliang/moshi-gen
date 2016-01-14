/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Order');
const acceptedOffer = Symbol.for('acceptedOffer');
const billingAddress = Symbol.for('billingAddress');
const broker = Symbol.for('broker');
const confirmationNumber = Symbol.for('confirmationNumber');
const customer = Symbol.for('customer');
const discount = Symbol.for('discount');
const discountCode = Symbol.for('discountCode');
const discountCurrency = Symbol.for('discountCurrency');
const isGift = Symbol.for('isGift');
const orderDate = Symbol.for('orderDate');
const orderDelivery = Symbol.for('orderDelivery');
const orderNumber = Symbol.for('orderNumber');
const orderStatus = Symbol.for('orderStatus');
const orderedItem = Symbol.for('orderedItem');
const partOfInvoice = Symbol.for('partOfInvoice');
const paymentDueDate = Symbol.for('paymentDueDate');
const paymentMethod = Symbol.for('paymentMethod');
const paymentMethodId = Symbol.for('paymentMethodId');
const paymentUrl = Symbol.for('paymentUrl');
const seller = Symbol.for('seller');


/**
 * An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.
 */
class Order extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Order';
  }

  set acceptedOffer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Offer');
    this[acceptedOffer] = this.constructor.toArray(sanitized);
  }

  get acceptedOffer() {
    let value = this[acceptedOffer];
    return this.constructor.fromArray(value);
  }  set billingAddress(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PostalAddress');
    this[billingAddress] = this.constructor.toArray(sanitized);
  }

  get billingAddress() {
    let value = this[billingAddress];
    return this.constructor.fromArray(value);
  }  set broker(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[broker] = this.constructor.toArray(sanitized);
  }

  get broker() {
    let value = this[broker];
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
  }  set discount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[discount] = this.constructor.toArray(sanitized);
  }

  get discount() {
    let value = this[discount];
    return this.constructor.fromArray(value);
  }  set discountCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[discountCode] = this.constructor.toArray(sanitized);
  }

  get discountCode() {
    let value = this[discountCode];
    return this.constructor.fromArray(value);
  }  set discountCurrency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[discountCurrency] = this.constructor.toArray(sanitized);
  }

  get discountCurrency() {
    let value = this[discountCurrency];
    return this.constructor.fromArray(value);
  }  set isGift(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[isGift] = this.constructor.toArray(sanitized);
  }

  get isGift() {
    let value = this[isGift];
    return this.constructor.fromArray(value);
  }  set orderDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[orderDate] = this.constructor.toArray(sanitized);
  }

  get orderDate() {
    let value = this[orderDate];
    return this.constructor.fromArray(value);
  }  set orderDelivery(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ParcelDelivery');
    this[orderDelivery] = this.constructor.toArray(sanitized);
  }

  get orderDelivery() {
    let value = this[orderDelivery];
    return this.constructor.fromArray(value);
  }  set orderNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[orderNumber] = this.constructor.toArray(sanitized);
  }

  get orderNumber() {
    let value = this[orderNumber];
    return this.constructor.fromArray(value);
  }  set orderStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OrderStatus');
    this[orderStatus] = this.constructor.toArray(sanitized);
  }

  get orderStatus() {
    let value = this[orderStatus];
    return this.constructor.fromArray(value);
  }  set orderedItem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OrderItem','Product');
    this[orderedItem] = this.constructor.toArray(sanitized);
  }

  get orderedItem() {
    let value = this[orderedItem];
    return this.constructor.fromArray(value);
  }  set partOfInvoice(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Invoice');
    this[partOfInvoice] = this.constructor.toArray(sanitized);
  }

  get partOfInvoice() {
    let value = this[partOfInvoice];
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
  }  set paymentUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[paymentUrl] = this.constructor.toArray(sanitized);
  }

  get paymentUrl() {
    let value = this[paymentUrl];
    return this.constructor.fromArray(value);
  }  set seller(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[seller] = this.constructor.toArray(sanitized);
  }

  get seller() {
    let value = this[seller];
    return this.constructor.fromArray(value);
  }

}

export default Order;
