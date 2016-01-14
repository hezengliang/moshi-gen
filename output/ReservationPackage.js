/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Reservation from './Reservation';

const _debug = debug('moshi:classes:ReservationPackage');
const subReservation = Symbol.for('subReservation');


/**
 * A group of multiple reservations with common values for all sub-reservations.
 */
class ReservationPackage extends Reservation {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ReservationPackage';
  }

  set subReservation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Reservation');
    this[subReservation] = this.constructor.toArray(sanitized);
  }

  get subReservation() {
    let value = this[subReservation];
    return this.constructor.fromArray(value);
  }

}

export default ReservationPackage;
