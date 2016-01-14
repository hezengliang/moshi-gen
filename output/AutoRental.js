/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AutomotiveBusiness from './AutomotiveBusiness';

const _debug = debug('moshi:classes:AutoRental');


/**
 * A car rental business.
 */
class AutoRental extends AutomotiveBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AutoRental';
  }



}

export default AutoRental;
