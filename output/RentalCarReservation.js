/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Reservation from './Reservation';

const _debug = debug('moshi:classes:RentalCarReservation');
const dropoffLocation = Symbol.for('dropoffLocation');
const dropoffTime = Symbol.for('dropoffTime');
const pickupLocation = Symbol.for('pickupLocation');
const pickupTime = Symbol.for('pickupTime');


/**
 * A reservation for a rental car.
 */
class RentalCarReservation extends Reservation {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'RentalCarReservation';
  }

  set dropoffLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[dropoffLocation] = this.constructor.toArray(sanitized);
  }

  get dropoffLocation() {
    let value = this[dropoffLocation];
    return this.constructor.fromArray(value);
  }  set dropoffTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[dropoffTime] = this.constructor.toArray(sanitized);
  }

  get dropoffTime() {
    let value = this[dropoffTime];
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

export default RentalCarReservation;
