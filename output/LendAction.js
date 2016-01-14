/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TransferAction from './TransferAction';

const _debug = debug('moshi:classes:LendAction');
const borrower = Symbol.for('borrower');


/**
 * The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.Related actions:BorrowAction: Reciprocal of LendAction.
 */
class LendAction extends TransferAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'LendAction';
  }

  set borrower(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[borrower] = this.constructor.toArray(sanitized);
  }

  get borrower() {
    let value = this[borrower];
    return this.constructor.fromArray(value);
  }

}

export default LendAction;
