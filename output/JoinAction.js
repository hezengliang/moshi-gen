/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import InteractAction from './InteractAction';

const _debug = debug('moshi:classes:JoinAction');
const event = Symbol.for('event');


/**
 * An agent joins an event/group with participants/friends at a location.Related actions:RegisterAction: Unlike RegisterAction, JoinAction refers to joining a group/team of people.SubscribeAction: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.FollowAction: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.
 */
class JoinAction extends InteractAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'JoinAction';
  }

  set event(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Event');
    this[event] = this.constructor.toArray(sanitized);
  }

  get event() {
    let value = this[event];
    return this.constructor.fromArray(value);
  }

}

export default JoinAction;
