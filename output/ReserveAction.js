/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PlanAction from './PlanAction';

const _debug = debug('moshi:classes:ReserveAction');


/**
 * Reserving a concrete object.Related actions:ScheduleAction: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.
 */
class ReserveAction extends PlanAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ReserveAction';
  }



}

export default ReserveAction;
