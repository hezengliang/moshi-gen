/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AssessAction from './AssessAction';

const _debug = debug('moshi:classes:ReviewAction');
const resultReview = Symbol.for('resultReview');


/**
 * The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.
 */
class ReviewAction extends AssessAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ReviewAction';
  }

  set resultReview(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Review');
    this[resultReview] = this.constructor.toArray(sanitized);
  }

  get resultReview() {
    let value = this[resultReview];
    return this.constructor.fromArray(value);
  }

}

export default ReviewAction;
