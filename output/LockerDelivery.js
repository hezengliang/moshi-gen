/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import DeliveryMethod from './DeliveryMethod';

const _debug = debug('moshi:classes:LockerDelivery');


/**
 * A DeliveryMethod in which an item is made available via locker.
 */
class LockerDelivery extends DeliveryMethod {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'LockerDelivery';
  }



}

export default LockerDelivery;
