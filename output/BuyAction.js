/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TradeAction from './TradeAction';

const _debug = debug('moshi:classes:BuyAction');
const seller = Symbol.for('seller');


/**
 * The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.
 */
class BuyAction extends TradeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BuyAction';
  }

  set seller(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[seller] = this.constructor.toArray(sanitized);
  }

  get seller() {
    let value = this[seller];
    return this.constructor.fromArray(value);
  }

}

export default BuyAction;
