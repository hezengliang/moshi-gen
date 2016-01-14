/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TransferAction from './TransferAction';

const _debug = debug('moshi:classes:BorrowAction');
const lender = Symbol.for('lender');


/**
 * The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.Related actions:LendAction: Reciprocal of BorrowAction.
 */
class BorrowAction extends TransferAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BorrowAction';
  }

  set lender(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[lender] = this.constructor.toArray(sanitized);
  }

  get lender() {
    let value = this[lender];
    return this.constructor.fromArray(value);
  }

}

export default BorrowAction;
