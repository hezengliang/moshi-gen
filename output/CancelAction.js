/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PlanAction from './PlanAction';

const _debug = debug('moshi:classes:CancelAction');


/**
 * The act of asserting that a future event/action is no longer going to happen.Related actions:ConfirmAction: The antonym of CancelAction.
 */
class CancelAction extends PlanAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CancelAction';
  }



}

export default CancelAction;
