/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TradeAction from './TradeAction';

const _debug = debug('moshi:classes:DonateAction');
const recipient = Symbol.for('recipient');


/**
 * The act of providing goods, services, or money without compensation, often for philanthropic reasons.
 */
class DonateAction extends TradeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DonateAction';
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

export default DonateAction;
