/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PlanAction from './PlanAction';

const _debug = debug('moshi:classes:ScheduleAction');


/**
 * Scheduling future actions, events, or tasks.Related actions:ReserveAction: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.
 */
class ScheduleAction extends PlanAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ScheduleAction';
  }



}

export default ScheduleAction;
