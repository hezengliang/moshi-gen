/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import EntertainmentBusiness from './EntertainmentBusiness';

const _debug = debug('moshi:classes:NightClub');


/**
 * A nightclub or discotheque.
 */
class NightClub extends EntertainmentBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'NightClub';
  }



}

export default NightClub;
