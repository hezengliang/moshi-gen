/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import LocalBusiness from './LocalBusiness';

const _debug = debug('moshi:classes:Store');
const branchCode = Symbol.for('branchCode');


/**
 * A retail good store.
 */
class Store extends LocalBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Store';
  }

  set branchCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[branchCode] = this.constructor.toArray(sanitized);
  }

  get branchCode() {
    let value = this[branchCode];
    return this.constructor.fromArray(value);
  }

}

export default Store;
