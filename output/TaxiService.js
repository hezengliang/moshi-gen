/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Service from './Service';

const _debug = debug('moshi:classes:TaxiService');


/**
 * A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled.
 */
class TaxiService extends Service {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TaxiService';
  }



}

export default TaxiService;
