/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Seat');
const seatNumber = Symbol.for('seatNumber');
const seatRow = Symbol.for('seatRow');
const seatSection = Symbol.for('seatSection');
const seatingType = Symbol.for('seatingType');


/**
 * Used to describe a seat, such as a reserved seat in an event reservation.
 */
class Seat extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Seat';
  }

  set seatNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[seatNumber] = this.constructor.toArray(sanitized);
  }

  get seatNumber() {
    let value = this[seatNumber];
    return this.constructor.fromArray(value);
  }  set seatRow(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[seatRow] = this.constructor.toArray(sanitized);
  }

  get seatRow() {
    let value = this[seatRow];
    return this.constructor.fromArray(value);
  }  set seatSection(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[seatSection] = this.constructor.toArray(sanitized);
  }

  get seatSection() {
    let value = this[seatSection];
    return this.constructor.fromArray(value);
  }  set seatingType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue','Text');
    this[seatingType] = this.constructor.toArray(sanitized);
  }

  get seatingType() {
    let value = this[seatingType];
    return this.constructor.fromArray(value);
  }

}

export default Seat;
