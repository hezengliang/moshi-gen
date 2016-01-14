/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TradeAction from './TradeAction';

const _debug = debug('moshi:classes:PayAction');
const purpose = Symbol.for('purpose');
const recipient = Symbol.for('recipient');


/**
 * An agent pays a price to a participant.
 */
class PayAction extends TradeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PayAction';
  }

  set purpose(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalDevicePurpose','Thing');
    this[purpose] = this.constructor.toArray(sanitized);
  }

  get purpose() {
    let value = this[purpose];
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

export default PayAction;
