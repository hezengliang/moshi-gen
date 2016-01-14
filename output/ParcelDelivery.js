/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:ParcelDelivery');
const deliveryAddress = Symbol.for('deliveryAddress');
const deliveryStatus = Symbol.for('deliveryStatus');
const expectedArrivalFrom = Symbol.for('expectedArrivalFrom');
const expectedArrivalUntil = Symbol.for('expectedArrivalUntil');
const hasDeliveryMethod = Symbol.for('hasDeliveryMethod');
const itemShipped = Symbol.for('itemShipped');
const originAddress = Symbol.for('originAddress');
const partOfOrder = Symbol.for('partOfOrder');
const provider = Symbol.for('provider');
const trackingNumber = Symbol.for('trackingNumber');
const trackingUrl = Symbol.for('trackingUrl');


/**
 * The delivery of a parcel either via the postal service or a commercial service.
 */
class ParcelDelivery extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ParcelDelivery';
  }

  set deliveryAddress(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PostalAddress');
    this[deliveryAddress] = this.constructor.toArray(sanitized);
  }

  get deliveryAddress() {
    let value = this[deliveryAddress];
    return this.constructor.fromArray(value);
  }  set deliveryStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DeliveryEvent');
    this[deliveryStatus] = this.constructor.toArray(sanitized);
  }

  get deliveryStatus() {
    let value = this[deliveryStatus];
    return this.constructor.fromArray(value);
  }  set expectedArrivalFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[expectedArrivalFrom] = this.constructor.toArray(sanitized);
  }

  get expectedArrivalFrom() {
    let value = this[expectedArrivalFrom];
    return this.constructor.fromArray(value);
  }  set expectedArrivalUntil(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[expectedArrivalUntil] = this.constructor.toArray(sanitized);
  }

  get expectedArrivalUntil() {
    let value = this[expectedArrivalUntil];
    return this.constructor.fromArray(value);
  }  set hasDeliveryMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DeliveryMethod');
    this[hasDeliveryMethod] = this.constructor.toArray(sanitized);
  }

  get hasDeliveryMethod() {
    let value = this[hasDeliveryMethod];
    return this.constructor.fromArray(value);
  }  set itemShipped(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Product');
    this[itemShipped] = this.constructor.toArray(sanitized);
  }

  get itemShipped() {
    let value = this[itemShipped];
    return this.constructor.fromArray(value);
  }  set originAddress(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PostalAddress');
    this[originAddress] = this.constructor.toArray(sanitized);
  }

  get originAddress() {
    let value = this[originAddress];
    return this.constructor.fromArray(value);
  }  set partOfOrder(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Order');
    this[partOfOrder] = this.constructor.toArray(sanitized);
  }

  get partOfOrder() {
    let value = this[partOfOrder];
    return this.constructor.fromArray(value);
  }  set provider(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[provider] = this.constructor.toArray(sanitized);
  }

  get provider() {
    let value = this[provider];
    return this.constructor.fromArray(value);
  }  set trackingNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[trackingNumber] = this.constructor.toArray(sanitized);
  }

  get trackingNumber() {
    let value = this[trackingNumber];
    return this.constructor.fromArray(value);
  }  set trackingUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[trackingUrl] = this.constructor.toArray(sanitized);
  }

  get trackingUrl() {
    let value = this[trackingUrl];
    return this.constructor.fromArray(value);
  }

}

export default ParcelDelivery;
