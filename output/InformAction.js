/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CommunicateAction from './CommunicateAction';

const _debug = debug('moshi:classes:InformAction');
const event = Symbol.for('event');


/**
 * The act of notifying someone of information pertinent to them, with no expectation of a response.
 */
class InformAction extends CommunicateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'InformAction';
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

export default InformAction;
