/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:OwnershipInfo');
const acquiredFrom = Symbol.for('acquiredFrom');
const ownedFrom = Symbol.for('ownedFrom');
const ownedThrough = Symbol.for('ownedThrough');
const typeOfGood = Symbol.for('typeOfGood');


/**
 * A structured value providing information about when a certain organization or person owned a certain product.
 */
class OwnershipInfo extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'OwnershipInfo';
  }

  set acquiredFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[acquiredFrom] = this.constructor.toArray(sanitized);
  }

  get acquiredFrom() {
    let value = this[acquiredFrom];
    return this.constructor.fromArray(value);
  }  set ownedFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[ownedFrom] = this.constructor.toArray(sanitized);
  }

  get ownedFrom() {
    let value = this[ownedFrom];
    return this.constructor.fromArray(value);
  }  set ownedThrough(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[ownedThrough] = this.constructor.toArray(sanitized);
  }

  get ownedThrough() {
    let value = this[ownedThrough];
    return this.constructor.fromArray(value);
  }  set typeOfGood(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Product');
    this[typeOfGood] = this.constructor.toArray(sanitized);
  }

  get typeOfGood() {
    let value = this[typeOfGood];
    return this.constructor.fromArray(value);
  }

}

export default OwnershipInfo;
