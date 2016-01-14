/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Service from './Service';

const _debug = debug('moshi:classes:CableOrSatelliteService');


/**
 * A service which provides access to media programming like TV or radio. Access may be via cable or satellite.
 */
class CableOrSatelliteService extends Service {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CableOrSatelliteService';
  }



}

export default CableOrSatelliteService;
