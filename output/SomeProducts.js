/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Product from './Product';

const _debug = debug('moshi:classes:SomeProducts');
const inventoryLevel = Symbol.for('inventoryLevel');


/**
 * A placeholder for multiple similar products of the same kind.
 */
class SomeProducts extends Product {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SomeProducts';
  }

  set inventoryLevel(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[inventoryLevel] = this.constructor.toArray(sanitized);
  }

  get inventoryLevel() {
    let value = this[inventoryLevel];
    return this.constructor.fromArray(value);
  }

}

export default SomeProducts;
