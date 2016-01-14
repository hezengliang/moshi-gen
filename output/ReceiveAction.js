/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TransferAction from './TransferAction';

const _debug = debug('moshi:classes:ReceiveAction');
const deliveryMethod = Symbol.for('deliveryMethod');
const sender = Symbol.for('sender');


/**
 * The act of physically/electronically taking delivery of an object thathas been transferred from an origin to a destination. Reciprocal of SendAction.Related actions:SendAction: The reciprocal of ReceiveAction.TakeAction: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).
 */
class ReceiveAction extends TransferAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ReceiveAction';
  }

  set deliveryMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DeliveryMethod');
    this[deliveryMethod] = this.constructor.toArray(sanitized);
  }

  get deliveryMethod() {
    let value = this[deliveryMethod];
    return this.constructor.fromArray(value);
  }  set sender(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Audience','Person','Organization');
    this[sender] = this.constructor.toArray(sanitized);
  }

  get sender() {
    let value = this[sender];
    return this.constructor.fromArray(value);
  }

}

export default ReceiveAction;
