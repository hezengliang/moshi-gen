/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Rating');
const bestRating = Symbol.for('bestRating');
const ratingValue = Symbol.for('ratingValue');
const worstRating = Symbol.for('worstRating');


/**
 * A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
 */
class Rating extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Rating';
  }

  set bestRating(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[bestRating] = this.constructor.toArray(sanitized);
  }

  get bestRating() {
    let value = this[bestRating];
    return this.constructor.fromArray(value);
  }  set ratingValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[ratingValue] = this.constructor.toArray(sanitized);
  }

  get ratingValue() {
    let value = this[ratingValue];
    return this.constructor.fromArray(value);
  }  set worstRating(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[worstRating] = this.constructor.toArray(sanitized);
  }

  get worstRating() {
    let value = this[worstRating];
    return this.constructor.fromArray(value);
  }

}

export default Rating;
