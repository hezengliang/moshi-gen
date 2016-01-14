/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Reservation from './Reservation';

const _debug = debug('moshi:classes:TaxiReservation');
const partySize = Symbol.for('partySize');
const pickupLocation = Symbol.for('pickupLocation');
const pickupTime = Symbol.for('pickupTime');


/**
 * A reservation for a taxi.
 */
class TaxiReservation extends Reservation {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TaxiReservation';
  }

  set partySize(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','QuantitativeValue');
    this[partySize] = this.constructor.toArray(sanitized);
  }

  get partySize() {
    let value = this[partySize];
    return this.constructor.fromArray(value);
  }  set pickupLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[pickupLocation] = this.constructor.toArray(sanitized);
  }

  get pickupLocation() {
    let value = this[pickupLocation];
    return this.constructor.fromArray(value);
  }  set pickupTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[pickupTime] = this.constructor.toArray(sanitized);
  }

  get pickupTime() {
    let value = this[pickupTime];
    return this.constructor.fromArray(value);
  }

}

export default TaxiReservation;
