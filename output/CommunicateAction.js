/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import InteractAction from './InteractAction';

const _debug = debug('moshi:classes:CommunicateAction');
const about = Symbol.for('about');
const inLanguage = Symbol.for('inLanguage');
const recipient = Symbol.for('recipient');


/**
 * The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.
 */
class CommunicateAction extends InteractAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CommunicateAction';
  }

  set about(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[about] = this.constructor.toArray(sanitized);
  }

  get about() {
    let value = this[about];
    return this.constructor.fromArray(value);
  }  set inLanguage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Language','Text');
    this[inLanguage] = this.constructor.toArray(sanitized);
  }

  get inLanguage() {
    let value = this[inLanguage];
    return this.constructor.fromArray(value);
  }  set recipient(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Audience','Person','Organization');
    this[recipient] = this.constructor.toArray(sanitized);
  }

  get recipient() {
    let value = this[recipient];
    return this.constructor.fromArray(value);
  }

}

export default CommunicateAction;
