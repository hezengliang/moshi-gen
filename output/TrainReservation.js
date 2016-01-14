/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Reservation from './Reservation';

const _debug = debug('moshi:classes:TrainReservation');


/**
 * A reservation for train travel.
 */
class TrainReservation extends Reservation {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TrainReservation';
  }



}

export default TrainReservation;
