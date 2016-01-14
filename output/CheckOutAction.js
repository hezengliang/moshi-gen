/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CommunicateAction from './CommunicateAction';

const _debug = debug('moshi:classes:CheckOutAction');


/**
 * The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).Related actions:CheckInAction: The antonym of CheckOutAction.DepartAction: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.CancelAction: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.
 */
class CheckOutAction extends CommunicateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CheckOutAction';
  }



}

export default CheckOutAction;
