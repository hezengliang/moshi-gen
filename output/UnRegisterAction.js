/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import InteractAction from './InteractAction';

const _debug = debug('moshi:classes:UnRegisterAction');


/**
 * The act of un-registering from a service.Related actions:RegisterAction: antonym of UnRegisterAction.Leave: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.
 */
class UnRegisterAction extends InteractAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'UnRegisterAction';
  }



}

export default UnRegisterAction;
