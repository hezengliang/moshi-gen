/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TransferAction from './TransferAction';

const _debug = debug('moshi:classes:SendAction');
const deliveryMethod = Symbol.for('deliveryMethod');
const recipient = Symbol.for('recipient');


/**
 * The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:ReceiveAction: The reciprocal of SendAction.GiveAction: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).
 */
class SendAction extends TransferAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SendAction';
  }

  set deliveryMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DeliveryMethod');
    this[deliveryMethod] = this.constructor.toArray(sanitized);
  }

  get deliveryMethod() {
    let value = this[deliveryMethod];
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

export default SendAction;
