/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Reservation from './Reservation';

const _debug = debug('moshi:classes:LodgingReservation');
const checkinTime = Symbol.for('checkinTime');
const checkoutTime = Symbol.for('checkoutTime');
const lodgingUnitDescription = Symbol.for('lodgingUnitDescription');
const lodgingUnitType = Symbol.for('lodgingUnitType');
const numAdults = Symbol.for('numAdults');
const numChildren = Symbol.for('numChildren');


/**
 * A reservation for lodging at a hotel, motel, inn, etc.
 */
class LodgingReservation extends Reservation {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'LodgingReservation';
  }

  set checkinTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[checkinTime] = this.constructor.toArray(sanitized);
  }

  get checkinTime() {
    let value = this[checkinTime];
    return this.constructor.fromArray(value);
  }  set checkoutTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[checkoutTime] = this.constructor.toArray(sanitized);
  }

  get checkoutTime() {
    let value = this[checkoutTime];
    return this.constructor.fromArray(value);
  }  set lodgingUnitDescription(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[lodgingUnitDescription] = this.constructor.toArray(sanitized);
  }

  get lodgingUnitDescription() {
    let value = this[lodgingUnitDescription];
    return this.constructor.fromArray(value);
  }  set lodgingUnitType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue','Text');
    this[lodgingUnitType] = this.constructor.toArray(sanitized);
  }

  get lodgingUnitType() {
    let value = this[lodgingUnitType];
    return this.constructor.fromArray(value);
  }  set numAdults(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','QuantitativeValue');
    this[numAdults] = this.constructor.toArray(sanitized);
  }

  get numAdults() {
    let value = this[numAdults];
    return this.constructor.fromArray(value);
  }  set numChildren(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','QuantitativeValue');
    this[numChildren] = this.constructor.toArray(sanitized);
  }

  get numChildren() {
    let value = this[numChildren];
    return this.constructor.fromArray(value);
  }

}

export default LodgingReservation;
