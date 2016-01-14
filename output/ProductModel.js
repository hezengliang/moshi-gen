/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Product from './Product';

const _debug = debug('moshi:classes:ProductModel');
const isVariantOf = Symbol.for('isVariantOf');
const predecessorOf = Symbol.for('predecessorOf');
const successorOf = Symbol.for('successorOf');


/**
 * A datasheet or vendor specification of a product (in the sense of a prototypical description).
 */
class ProductModel extends Product {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ProductModel';
  }

  set isVariantOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ProductModel');
    this[isVariantOf] = this.constructor.toArray(sanitized);
  }

  get isVariantOf() {
    let value = this[isVariantOf];
    return this.constructor.fromArray(value);
  }  set predecessorOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ProductModel');
    this[predecessorOf] = this.constructor.toArray(sanitized);
  }

  get predecessorOf() {
    let value = this[predecessorOf];
    return this.constructor.fromArray(value);
  }  set successorOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ProductModel');
    this[successorOf] = this.constructor.toArray(sanitized);
  }

  get successorOf() {
    let value = this[successorOf];
    return this.constructor.fromArray(value);
  }

}

export default ProductModel;
