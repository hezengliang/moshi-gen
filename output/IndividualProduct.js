/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Product from './Product';

const _debug = debug('moshi:classes:IndividualProduct');
const serialNumber = Symbol.for('serialNumber');


/**
 * A single, identifiable product instance (e.g. a laptop with a particular serial number).
 */
class IndividualProduct extends Product {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'IndividualProduct';
  }

  set serialNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[serialNumber] = this.constructor.toArray(sanitized);
  }

  get serialNumber() {
    let value = this[serialNumber];
    return this.constructor.fromArray(value);
  }

}

export default IndividualProduct;
