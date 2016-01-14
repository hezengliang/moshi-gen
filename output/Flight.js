/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Flight');
const aircraft = Symbol.for('aircraft');
const arrivalAirport = Symbol.for('arrivalAirport');
const arrivalGate = Symbol.for('arrivalGate');
const arrivalTerminal = Symbol.for('arrivalTerminal');
const arrivalTime = Symbol.for('arrivalTime');
const boardingPolicy = Symbol.for('boardingPolicy');
const departureAirport = Symbol.for('departureAirport');
const departureGate = Symbol.for('departureGate');
const departureTerminal = Symbol.for('departureTerminal');
const departureTime = Symbol.for('departureTime');
const estimatedFlightDuration = Symbol.for('estimatedFlightDuration');
const flightDistance = Symbol.for('flightDistance');
const flightNumber = Symbol.for('flightNumber');
const mealService = Symbol.for('mealService');
const provider = Symbol.for('provider');
const seller = Symbol.for('seller');
const webCheckinTime = Symbol.for('webCheckinTime');


/**
 * An airline flight.
 */
class Flight extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Flight';
  }

  set aircraft(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','Vehicle');
    this[aircraft] = this.constructor.toArray(sanitized);
  }

  get aircraft() {
    let value = this[aircraft];
    return this.constructor.fromArray(value);
  }  set arrivalAirport(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Airport');
    this[arrivalAirport] = this.constructor.toArray(sanitized);
  }

  get arrivalAirport() {
    let value = this[arrivalAirport];
    return this.constructor.fromArray(value);
  }  set arrivalGate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[arrivalGate] = this.constructor.toArray(sanitized);
  }

  get arrivalGate() {
    let value = this[arrivalGate];
    return this.constructor.fromArray(value);
  }  set arrivalTerminal(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[arrivalTerminal] = this.constructor.toArray(sanitized);
  }

  get arrivalTerminal() {
    let value = this[arrivalTerminal];
    return this.constructor.fromArray(value);
  }  set arrivalTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[arrivalTime] = this.constructor.toArray(sanitized);
  }

  get arrivalTime() {
    let value = this[arrivalTime];
    return this.constructor.fromArray(value);
  }  set boardingPolicy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BoardingPolicyType');
    this[boardingPolicy] = this.constructor.toArray(sanitized);
  }

  get boardingPolicy() {
    let value = this[boardingPolicy];
    return this.constructor.fromArray(value);
  }  set departureAirport(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Airport');
    this[departureAirport] = this.constructor.toArray(sanitized);
  }

  get departureAirport() {
    let value = this[departureAirport];
    return this.constructor.fromArray(value);
  }  set departureGate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[departureGate] = this.constructor.toArray(sanitized);
  }

  get departureGate() {
    let value = this[departureGate];
    return this.constructor.fromArray(value);
  }  set departureTerminal(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[departureTerminal] = this.constructor.toArray(sanitized);
  }

  get departureTerminal() {
    let value = this[departureTerminal];
    return this.constructor.fromArray(value);
  }  set departureTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[departureTime] = this.constructor.toArray(sanitized);
  }

  get departureTime() {
    let value = this[departureTime];
    return this.constructor.fromArray(value);
  }  set estimatedFlightDuration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','Duration');
    this[estimatedFlightDuration] = this.constructor.toArray(sanitized);
  }

  get estimatedFlightDuration() {
    let value = this[estimatedFlightDuration];
    return this.constructor.fromArray(value);
  }  set flightDistance(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','Distance');
    this[flightDistance] = this.constructor.toArray(sanitized);
  }

  get flightDistance() {
    let value = this[flightDistance];
    return this.constructor.fromArray(value);
  }  set flightNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[flightNumber] = this.constructor.toArray(sanitized);
  }

  get flightNumber() {
    let value = this[flightNumber];
    return this.constructor.fromArray(value);
  }  set mealService(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[mealService] = this.constructor.toArray(sanitized);
  }

  get mealService() {
    let value = this[mealService];
    return this.constructor.fromArray(value);
  }  set provider(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[provider] = this.constructor.toArray(sanitized);
  }

  get provider() {
    let value = this[provider];
    return this.constructor.fromArray(value);
  }  set seller(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[seller] = this.constructor.toArray(sanitized);
  }

  get seller() {
    let value = this[seller];
    return this.constructor.fromArray(value);
  }  set webCheckinTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[webCheckinTime] = this.constructor.toArray(sanitized);
  }

  get webCheckinTime() {
    let value = this[webCheckinTime];
    return this.constructor.fromArray(value);
  }

}

export default Flight;
