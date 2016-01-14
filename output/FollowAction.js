/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import InteractAction from './InteractAction';

const _debug = debug('moshi:classes:FollowAction');
const followee = Symbol.for('followee');


/**
 * The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.Related actions:BefriendAction: Unlike BefriendAction, FollowAction implies that the connection is *not* necessarily reciprocal.SubscribeAction: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.RegisterAction: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.JoinAction: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.TrackAction: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it).
 */
class FollowAction extends InteractAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'FollowAction';
  }

  set followee(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[followee] = this.constructor.toArray(sanitized);
  }

  get followee() {
    let value = this[followee];
    return this.constructor.fromArray(value);
  }

}

export default FollowAction;
