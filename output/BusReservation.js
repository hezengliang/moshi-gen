/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Reservation from './Reservation';

const _debug = debug('moshi:classes:BusReservation');


/**
 * A reservation for bus travel.
 */
class BusReservation extends Reservation {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BusReservation';
  }



}

export default BusReservation;
