/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:PriceSpecification');
const eligibleQuantity = Symbol.for('eligibleQuantity');
const eligibleTransactionVolume = Symbol.for('eligibleTransactionVolume');
const maxPrice = Symbol.for('maxPrice');
const minPrice = Symbol.for('minPrice');
const price = Symbol.for('price');
const priceCurrency = Symbol.for('priceCurrency');
const validFrom = Symbol.for('validFrom');
const validThrough = Symbol.for('validThrough');
const valueAddedTaxIncluded = Symbol.for('valueAddedTaxIncluded');


/**
 * A structured value representing a monetary amount. Typically, only the subclasses of this type are used for markup.
 */
class PriceSpecification extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PriceSpecification';
  }

  set eligibleQuantity(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[eligibleQuantity] = this.constructor.toArray(sanitized);
  }

  get eligibleQuantity() {
    let value = this[eligibleQuantity];
    return this.constructor.fromArray(value);
  }  set eligibleTransactionVolume(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PriceSpecification');
    this[eligibleTransactionVolume] = this.constructor.toArray(sanitized);
  }

  get eligibleTransactionVolume() {
    let value = this[eligibleTransactionVolume];
    return this.constructor.fromArray(value);
  }  set maxPrice(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[maxPrice] = this.constructor.toArray(sanitized);
  }

  get maxPrice() {
    let value = this[maxPrice];
    return this.constructor.fromArray(value);
  }  set minPrice(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[minPrice] = this.constructor.toArray(sanitized);
  }

  get minPrice() {
    let value = this[minPrice];
    return this.constructor.fromArray(value);
  }  set price(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[price] = this.constructor.toArray(sanitized);
  }

  get price() {
    let value = this[price];
    return this.constructor.fromArray(value);
  }  set priceCurrency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[priceCurrency] = this.constructor.toArray(sanitized);
  }

  get priceCurrency() {
    let value = this[priceCurrency];
    return this.constructor.fromArray(value);
  }  set validFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[validFrom] = this.constructor.toArray(sanitized);
  }

  get validFrom() {
    let value = this[validFrom];
    return this.constructor.fromArray(value);
  }  set validThrough(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[validThrough] = this.constructor.toArray(sanitized);
  }

  get validThrough() {
    let value = this[validThrough];
    return this.constructor.fromArray(value);
  }  set valueAddedTaxIncluded(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[valueAddedTaxIncluded] = this.constructor.toArray(sanitized);
  }

  get valueAddedTaxIncluded() {
    let value = this[valueAddedTaxIncluded];
    return this.constructor.fromArray(value);
  }

}

export default PriceSpecification;
