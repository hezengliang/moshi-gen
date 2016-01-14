/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:TrainTrip');
const arrivalPlatform = Symbol.for('arrivalPlatform');
const arrivalStation = Symbol.for('arrivalStation');
const arrivalTime = Symbol.for('arrivalTime');
const departurePlatform = Symbol.for('departurePlatform');
const departureStation = Symbol.for('departureStation');
const departureTime = Symbol.for('departureTime');
const provider = Symbol.for('provider');
const trainName = Symbol.for('trainName');
const trainNumber = Symbol.for('trainNumber');


/**
 * A trip on a commercial train line.
 */
class TrainTrip extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TrainTrip';
  }

  set arrivalPlatform(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[arrivalPlatform] = this.constructor.toArray(sanitized);
  }

  get arrivalPlatform() {
    let value = this[arrivalPlatform];
    return this.constructor.fromArray(value);
  }  set arrivalStation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'TrainStation');
    this[arrivalStation] = this.constructor.toArray(sanitized);
  }

  get arrivalStation() {
    let value = this[arrivalStation];
    return this.constructor.fromArray(value);
  }  set arrivalTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[arrivalTime] = this.constructor.toArray(sanitized);
  }

  get arrivalTime() {
    let value = this[arrivalTime];
    return this.constructor.fromArray(value);
  }  set departurePlatform(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[departurePlatform] = this.constructor.toArray(sanitized);
  }

  get departurePlatform() {
    let value = this[departurePlatform];
    return this.constructor.fromArray(value);
  }  set departureStation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'TrainStation');
    this[departureStation] = this.constructor.toArray(sanitized);
  }

  get departureStation() {
    let value = this[departureStation];
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
  }  set trainName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[trainName] = this.constructor.toArray(sanitized);
  }

  get trainName() {
    let value = this[trainName];
    return this.constructor.fromArray(value);
  }  set trainNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[trainNumber] = this.constructor.toArray(sanitized);
  }

  get trainNumber() {
    let value = this[trainNumber];
    return this.constructor.fromArray(value);
  }

}

export default TrainTrip;
