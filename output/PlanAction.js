/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import OrganizeAction from './OrganizeAction';

const _debug = debug('moshi:classes:PlanAction');
const scheduledTime = Symbol.for('scheduledTime');


/**
 * The act of planning the execution of an event/task/action/reservation/plan to a future date.
 */
class PlanAction extends OrganizeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PlanAction';
  }

  set scheduledTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[scheduledTime] = this.constructor.toArray(sanitized);
  }

  get scheduledTime() {
    let value = this[scheduledTime];
    return this.constructor.fromArray(value);
  }

}

export default PlanAction;
