/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:WarrantyPromise');
const durationOfWarranty = Symbol.for('durationOfWarranty');
const warrantyScope = Symbol.for('warrantyScope');


/**
 * A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 */
class WarrantyPromise extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'WarrantyPromise';
  }

  set durationOfWarranty(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[durationOfWarranty] = this.constructor.toArray(sanitized);
  }

  get durationOfWarranty() {
    let value = this[durationOfWarranty];
    return this.constructor.fromArray(value);
  }  set warrantyScope(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'WarrantyScope');
    this[warrantyScope] = this.constructor.toArray(sanitized);
  }

  get warrantyScope() {
    let value = this[warrantyScope];
    return this.constructor.fromArray(value);
  }

}

export default WarrantyPromise;
