/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import InteractAction from './InteractAction';

const _debug = debug('moshi:classes:SubscribeAction');


/**
 * The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.Related actions:FollowAction: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.RegisterAction: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.JoinAction: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.
 */
class SubscribeAction extends InteractAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SubscribeAction';
  }



}

export default SubscribeAction;
