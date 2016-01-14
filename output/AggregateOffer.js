/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Offer from './Offer';

const _debug = debug('moshi:classes:AggregateOffer');
const highPrice = Symbol.for('highPrice');
const lowPrice = Symbol.for('lowPrice');
const offerCount = Symbol.for('offerCount');
const offers = Symbol.for('offers');


/**
 * When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.
 */
class AggregateOffer extends Offer {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AggregateOffer';
  }

  set highPrice(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[highPrice] = this.constructor.toArray(sanitized);
  }

  get highPrice() {
    let value = this[highPrice];
    return this.constructor.fromArray(value);
  }  set lowPrice(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[lowPrice] = this.constructor.toArray(sanitized);
  }

  get lowPrice() {
    let value = this[lowPrice];
    return this.constructor.fromArray(value);
  }  set offerCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[offerCount] = this.constructor.toArray(sanitized);
  }

  get offerCount() {
    let value = this[offerCount];
    return this.constructor.fromArray(value);
  }  set offers(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Offer');
    this[offers] = this.constructor.toArray(sanitized);
  }

  get offers() {
    let value = this[offers];
    return this.constructor.fromArray(value);
  }

}

export default AggregateOffer;
