/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Reservation');
const bookingTime = Symbol.for('bookingTime');
const broker = Symbol.for('broker');
const modifiedTime = Symbol.for('modifiedTime');
const priceCurrency = Symbol.for('priceCurrency');
const programMembershipUsed = Symbol.for('programMembershipUsed');
const provider = Symbol.for('provider');
const reservationFor = Symbol.for('reservationFor');
const reservationId = Symbol.for('reservationId');
const reservationStatus = Symbol.for('reservationStatus');
const reservedTicket = Symbol.for('reservedTicket');
const totalPrice = Symbol.for('totalPrice');
const underName = Symbol.for('underName');


/**
 * Describes a reservation for travel, dining or an event. Some reservations require tickets.
 */
class Reservation extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Reservation';
  }

  set bookingTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[bookingTime] = this.constructor.toArray(sanitized);
  }

  get bookingTime() {
    let value = this[bookingTime];
    return this.constructor.fromArray(value);
  }  set broker(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[broker] = this.constructor.toArray(sanitized);
  }

  get broker() {
    let value = this[broker];
    return this.constructor.fromArray(value);
  }  set modifiedTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[modifiedTime] = this.constructor.toArray(sanitized);
  }

  get modifiedTime() {
    let value = this[modifiedTime];
    return this.constructor.fromArray(value);
  }  set priceCurrency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[priceCurrency] = this.constructor.toArray(sanitized);
  }

  get priceCurrency() {
    let value = this[priceCurrency];
    return this.constructor.fromArray(value);
  }  set programMembershipUsed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ProgramMembership');
    this[programMembershipUsed] = this.constructor.toArray(sanitized);
  }

  get programMembershipUsed() {
    let value = this[programMembershipUsed];
    return this.constructor.fromArray(value);
  }  set provider(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[provider] = this.constructor.toArray(sanitized);
  }

  get provider() {
    let value = this[provider];
    return this.constructor.fromArray(value);
  }  set reservationFor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[reservationFor] = this.constructor.toArray(sanitized);
  }

  get reservationFor() {
    let value = this[reservationFor];
    return this.constructor.fromArray(value);
  }  set reservationId(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[reservationId] = this.constructor.toArray(sanitized);
  }

  get reservationId() {
    let value = this[reservationId];
    return this.constructor.fromArray(value);
  }  set reservationStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ReservationStatusType');
    this[reservationStatus] = this.constructor.toArray(sanitized);
  }

  get reservationStatus() {
    let value = this[reservationStatus];
    return this.constructor.fromArray(value);
  }  set reservedTicket(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Ticket');
    this[reservedTicket] = this.constructor.toArray(sanitized);
  }

  get reservedTicket() {
    let value = this[reservedTicket];
    return this.constructor.fromArray(value);
  }  set totalPrice(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','PriceSpecification','Number');
    this[totalPrice] = this.constructor.toArray(sanitized);
  }

  get totalPrice() {
    let value = this[totalPrice];
    return this.constructor.fromArray(value);
  }  set underName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[underName] = this.constructor.toArray(sanitized);
  }

  get underName() {
    let value = this[underName];
    return this.constructor.fromArray(value);
  }

}

export default Reservation;
