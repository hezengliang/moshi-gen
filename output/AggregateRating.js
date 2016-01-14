/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Rating from './Rating';

const _debug = debug('moshi:classes:AggregateRating');
const itemReviewed = Symbol.for('itemReviewed');
const ratingCount = Symbol.for('ratingCount');
const reviewCount = Symbol.for('reviewCount');


/**
 * The average rating based on multiple ratings or reviews.
 */
class AggregateRating extends Rating {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AggregateRating';
  }

  set itemReviewed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[itemReviewed] = this.constructor.toArray(sanitized);
  }

  get itemReviewed() {
    let value = this[itemReviewed];
    return this.constructor.fromArray(value);
  }  set ratingCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[ratingCount] = this.constructor.toArray(sanitized);
  }

  get ratingCount() {
    let value = this[ratingCount];
    return this.constructor.fromArray(value);
  }  set reviewCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[reviewCount] = this.constructor.toArray(sanitized);
  }

  get reviewCount() {
    let value = this[reviewCount];
    return this.constructor.fromArray(value);
  }

}

export default AggregateRating;
