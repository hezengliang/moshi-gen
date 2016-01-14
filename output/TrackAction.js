/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import FindAction from './FindAction';

const _debug = debug('moshi:classes:TrackAction');
const deliveryMethod = Symbol.for('deliveryMethod');


/**
 * An agent tracks an object for updates.Related actions:FollowAction: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.SubscribeAction: Unlike SubscribeAction, TrackAction refers to the interest on the location of innanimate objects.
 */
class TrackAction extends FindAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TrackAction';
  }

  set deliveryMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DeliveryMethod');
    this[deliveryMethod] = this.constructor.toArray(sanitized);
  }

  get deliveryMethod() {
    let value = this[deliveryMethod];
    return this.constructor.fromArray(value);
  }

}

export default TrackAction;
