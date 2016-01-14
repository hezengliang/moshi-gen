/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TransferAction from './TransferAction';

const _debug = debug('moshi:classes:ReturnAction');
const recipient = Symbol.for('recipient');


/**
 * The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).
 */
class ReturnAction extends TransferAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ReturnAction';
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

export default ReturnAction;
