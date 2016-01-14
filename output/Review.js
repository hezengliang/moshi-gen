/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Review');
const itemReviewed = Symbol.for('itemReviewed');
const reviewBody = Symbol.for('reviewBody');
const reviewRating = Symbol.for('reviewRating');


/**
 * A review of an item - for example, of a restaurant, movie, or store.
 */
class Review extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Review';
  }

  set itemReviewed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[itemReviewed] = this.constructor.toArray(sanitized);
  }

  get itemReviewed() {
    let value = this[itemReviewed];
    return this.constructor.fromArray(value);
  }  set reviewBody(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[reviewBody] = this.constructor.toArray(sanitized);
  }

  get reviewBody() {
    let value = this[reviewBody];
    return this.constructor.fromArray(value);
  }  set reviewRating(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Rating');
    this[reviewRating] = this.constructor.toArray(sanitized);
  }

  get reviewRating() {
    let value = this[reviewRating];
    return this.constructor.fromArray(value);
  }

}

export default Review;
