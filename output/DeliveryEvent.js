/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Event from './Event';

const _debug = debug('moshi:classes:DeliveryEvent');
const accessCode = Symbol.for('accessCode');
const availableFrom = Symbol.for('availableFrom');
const availableThrough = Symbol.for('availableThrough');
const hasDeliveryMethod = Symbol.for('hasDeliveryMethod');


/**
 * An event involving the delivery of an item.
 */
class DeliveryEvent extends Event {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DeliveryEvent';
  }

  set accessCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[accessCode] = this.constructor.toArray(sanitized);
  }

  get accessCode() {
    let value = this[accessCode];
    return this.constructor.fromArray(value);
  }  set availableFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[availableFrom] = this.constructor.toArray(sanitized);
  }

  get availableFrom() {
    let value = this[availableFrom];
    return this.constructor.fromArray(value);
  }  set availableThrough(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[availableThrough] = this.constructor.toArray(sanitized);
  }

  get availableThrough() {
    let value = this[availableThrough];
    return this.constructor.fromArray(value);
  }  set hasDeliveryMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DeliveryMethod');
    this[hasDeliveryMethod] = this.constructor.toArray(sanitized);
  }

  get hasDeliveryMethod() {
    let value = this[hasDeliveryMethod];
    return this.constructor.fromArray(value);
  }

}

export default DeliveryEvent;
