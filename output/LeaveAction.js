/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import InteractAction from './InteractAction';

const _debug = debug('moshi:classes:LeaveAction');
const event = Symbol.for('event');


/**
 * An agent leaves an event / group with participants/friends at a location.Related actions:JoinAction: The antonym of LeaveAction.UnRegisterAction: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.
 */
class LeaveAction extends InteractAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'LeaveAction';
  }

  set event(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Event');
    this[event] = this.constructor.toArray(sanitized);
  }

  get event() {
    let value = this[event];
    return this.constructor.fromArray(value);
  }

}

export default LeaveAction;
