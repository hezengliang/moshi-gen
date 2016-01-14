/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PriceSpecification from './PriceSpecification';

const _debug = debug('moshi:classes:DeliveryChargeSpecification');
const appliesToDeliveryMethod = Symbol.for('appliesToDeliveryMethod');
const areaServed = Symbol.for('areaServed');
const eligibleRegion = Symbol.for('eligibleRegion');
const ineligibleRegion = Symbol.for('ineligibleRegion');


/**
 * The price for the delivery of an offer using a particular delivery method.
 */
class DeliveryChargeSpecification extends PriceSpecification {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DeliveryChargeSpecification';
  }

  set appliesToDeliveryMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DeliveryMethod');
    this[appliesToDeliveryMethod] = this.constructor.toArray(sanitized);
  }

  get appliesToDeliveryMethod() {
    let value = this[appliesToDeliveryMethod];
    return this.constructor.fromArray(value);
  }  set areaServed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AdministrativeArea','Place','Text','GeoShape');
    this[areaServed] = this.constructor.toArray(sanitized);
  }

  get areaServed() {
    let value = this[areaServed];
    return this.constructor.fromArray(value);
  }  set eligibleRegion(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place','Text','GeoShape');
    this[eligibleRegion] = this.constructor.toArray(sanitized);
  }

  get eligibleRegion() {
    let value = this[eligibleRegion];
    return this.constructor.fromArray(value);
  }  set ineligibleRegion(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place','Text','GeoShape');
    this[ineligibleRegion] = this.constructor.toArray(sanitized);
  }

  get ineligibleRegion() {
    let value = this[ineligibleRegion];
    return this.constructor.fromArray(value);
  }

}

export default DeliveryChargeSpecification;
