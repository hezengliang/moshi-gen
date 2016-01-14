/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import OrganizeAction from './OrganizeAction';

const _debug = debug('moshi:classes:ApplyAction');


/**
 * The act of registering to an organization/service without the guarantee to receive it. Related actions:RegisterAction: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.
 */
class ApplyAction extends OrganizeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ApplyAction';
  }



}

export default ApplyAction;
