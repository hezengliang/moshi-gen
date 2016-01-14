/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import EmergencyService from './EmergencyService';

const _debug = debug('moshi:classes:PoliceStation');


/**
 * A police station.
 */
class PoliceStation extends EmergencyService {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PoliceStation';
  }



}

export default PoliceStation;
