/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TradeAction from './TradeAction';

const _debug = debug('moshi:classes:SellAction');
const buyer = Symbol.for('buyer');


/**
 * The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.
 */
class SellAction extends TradeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SellAction';
  }

  set buyer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[buyer] = this.constructor.toArray(sanitized);
  }

  get buyer() {
    let value = this[buyer];
    return this.constructor.fromArray(value);
  }

}

export default SellAction;
