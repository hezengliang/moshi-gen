/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import InteractAction from './InteractAction';

const _debug = debug('moshi:classes:RegisterAction');


/**
 * The act of registering to be a user of a service, product or web page.Related actions:JoinAction: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, *not* a group/team of people.FollowAction: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.SubscribeAction: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.
 */
class RegisterAction extends InteractAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'RegisterAction';
  }



}

export default RegisterAction;
