/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Reservation from './Reservation';

const _debug = debug('moshi:classes:FlightReservation');
const boardingGroup = Symbol.for('boardingGroup');
const passengerPriorityStatus = Symbol.for('passengerPriorityStatus');
const passengerSequenceNumber = Symbol.for('passengerSequenceNumber');
const securityScreening = Symbol.for('securityScreening');


/**
 * A reservation for air travel.
 */
class FlightReservation extends Reservation {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'FlightReservation';
  }

  set boardingGroup(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[boardingGroup] = this.constructor.toArray(sanitized);
  }

  get boardingGroup() {
    let value = this[boardingGroup];
    return this.constructor.fromArray(value);
  }  set passengerPriorityStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue','Text');
    this[passengerPriorityStatus] = this.constructor.toArray(sanitized);
  }

  get passengerPriorityStatus() {
    let value = this[passengerPriorityStatus];
    return this.constructor.fromArray(value);
  }  set passengerSequenceNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[passengerSequenceNumber] = this.constructor.toArray(sanitized);
  }

  get passengerSequenceNumber() {
    let value = this[passengerSequenceNumber];
    return this.constructor.fromArray(value);
  }  set securityScreening(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[securityScreening] = this.constructor.toArray(sanitized);
  }

  get securityScreening() {
    let value = this[securityScreening];
    return this.constructor.fromArray(value);
  }

}

export default FlightReservation;
