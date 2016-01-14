/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import BroadcastChannel from './BroadcastChannel';

const _debug = debug('moshi:classes:TelevisionChannel');


/**
 * A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.
 */
class TelevisionChannel extends BroadcastChannel {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TelevisionChannel';
  }



}

export default TelevisionChannel;
