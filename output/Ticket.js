/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Ticket');
const dateIssued = Symbol.for('dateIssued');
const issuedBy = Symbol.for('issuedBy');
const priceCurrency = Symbol.for('priceCurrency');
const ticketNumber = Symbol.for('ticketNumber');
const ticketToken = Symbol.for('ticketToken');
const ticketedSeat = Symbol.for('ticketedSeat');
const totalPrice = Symbol.for('totalPrice');
const underName = Symbol.for('underName');


/**
 * Used to describe a ticket to an event, a flight, a bus ride, etc.
 */
class Ticket extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Ticket';
  }

  set dateIssued(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[dateIssued] = this.constructor.toArray(sanitized);
  }

  get dateIssued() {
    let value = this[dateIssued];
    return this.constructor.fromArray(value);
  }  set issuedBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[issuedBy] = this.constructor.toArray(sanitized);
  }

  get issuedBy() {
    let value = this[issuedBy];
    return this.constructor.fromArray(value);
  }  set priceCurrency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[priceCurrency] = this.constructor.toArray(sanitized);
  }

  get priceCurrency() {
    let value = this[priceCurrency];
    return this.constructor.fromArray(value);
  }  set ticketNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[ticketNumber] = this.constructor.toArray(sanitized);
  }

  get ticketNumber() {
    let value = this[ticketNumber];
    return this.constructor.fromArray(value);
  }  set ticketToken(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[ticketToken] = this.constructor.toArray(sanitized);
  }

  get ticketToken() {
    let value = this[ticketToken];
    return this.constructor.fromArray(value);
  }  set ticketedSeat(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Seat');
    this[ticketedSeat] = this.constructor.toArray(sanitized);
  }

  get ticketedSeat() {
    let value = this[ticketedSeat];
    return this.constructor.fromArray(value);
  }  set totalPrice(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','PriceSpecification','Text');
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

export default Ticket;
