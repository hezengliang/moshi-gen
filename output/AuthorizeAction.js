/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AllocateAction from './AllocateAction';

const _debug = debug('moshi:classes:AuthorizeAction');
const recipient = Symbol.for('recipient');


/**
 * The act of granting permission to an object.
 */
class AuthorizeAction extends AllocateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AuthorizeAction';
  }

  set recipient(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Audience','Person','Organization');
    this[recipient] = this.constructor.toArray(sanitized);
  }

  get recipient() {
    let value = this[recipient];
    return this.constructor.fromArray(value);
  }

}

export default AuthorizeAction;
