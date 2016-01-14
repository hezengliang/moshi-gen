/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CommunicateAction from './CommunicateAction';

const _debug = debug('moshi:classes:AskAction');
const question = Symbol.for('question');


/**
 * The act of posing a question / favor to someone.Related actions:ReplyAction: Appears generally as a response to AskAction.
 */
class AskAction extends CommunicateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AskAction';
  }

  set question(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Question');
    this[question] = this.constructor.toArray(sanitized);
  }

  get question() {
    let value = this[question];
    return this.constructor.fromArray(value);
  }

}

export default AskAction;
