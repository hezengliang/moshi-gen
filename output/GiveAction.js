/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TransferAction from './TransferAction';

const _debug = debug('moshi:classes:GiveAction');
const recipient = Symbol.for('recipient');


/**
 * The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.Related actions:TakeAction: Reciprocal of GiveAction.SendAction: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you).
 */
class GiveAction extends TransferAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'GiveAction';
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

export default GiveAction;
