/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Reservation from './Reservation';

const _debug = debug('moshi:classes:FoodEstablishmentReservation');
const endTime = Symbol.for('endTime');
const partySize = Symbol.for('partySize');
const startTime = Symbol.for('startTime');


/**
 * A reservation to dine at a food-related business.
 */
class FoodEstablishmentReservation extends Reservation {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'FoodEstablishmentReservation';
  }

  set endTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[endTime] = this.constructor.toArray(sanitized);
  }

  get endTime() {
    let value = this[endTime];
    return this.constructor.fromArray(value);
  }  set partySize(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','QuantitativeValue');
    this[partySize] = this.constructor.toArray(sanitized);
  }

  get partySize() {
    let value = this[partySize];
    return this.constructor.fromArray(value);
  }  set startTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[startTime] = this.constructor.toArray(sanitized);
  }

  get startTime() {
    let value = this[startTime];
    return this.constructor.fromArray(value);
  }

}

export default FoodEstablishmentReservation;
