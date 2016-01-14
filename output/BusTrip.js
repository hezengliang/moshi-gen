/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:BusTrip');
const arrivalBusStop = Symbol.for('arrivalBusStop');
const arrivalTime = Symbol.for('arrivalTime');
const busName = Symbol.for('busName');
const busNumber = Symbol.for('busNumber');
const departureBusStop = Symbol.for('departureBusStop');
const departureTime = Symbol.for('departureTime');
const provider = Symbol.for('provider');


/**
 * A trip on a commercial bus line.
 */
class BusTrip extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BusTrip';
  }

  set arrivalBusStop(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BusStation','BusStop');
    this[arrivalBusStop] = this.constructor.toArray(sanitized);
  }

  get arrivalBusStop() {
    let value = this[arrivalBusStop];
    return this.constructor.fromArray(value);
  }  set arrivalTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[arrivalTime] = this.constructor.toArray(sanitized);
  }

  get arrivalTime() {
    let value = this[arrivalTime];
    return this.constructor.fromArray(value);
  }  set busName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[busName] = this.constructor.toArray(sanitized);
  }

  get busName() {
    let value = this[busName];
    return this.constructor.fromArray(value);
  }  set busNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[busNumber] = this.constructor.toArray(sanitized);
  }

  get busNumber() {
    let value = this[busNumber];
    return this.constructor.fromArray(value);
  }  set departureBusStop(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BusStation','BusStop');
    this[departureBusStop] = this.constructor.toArray(sanitized);
  }

  get departureBusStop() {
    let value = this[departureBusStop];
    return this.constructor.fromArray(value);
  }  set departureTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[departureTime] = this.constructor.toArray(sanitized);
  }

  get departureTime() {
    let value = this[departureTime];
    return this.constructor.fromArray(value);
  }  set provider(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[provider] = this.constructor.toArray(sanitized);
  }

  get provider() {
    let value = this[provider];
    return this.constructor.fromArray(value);
  }

}

export default BusTrip;
