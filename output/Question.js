/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Question');
const acceptedAnswer = Symbol.for('acceptedAnswer');
const answerCount = Symbol.for('answerCount');
const downvoteCount = Symbol.for('downvoteCount');
const suggestedAnswer = Symbol.for('suggestedAnswer');
const upvoteCount = Symbol.for('upvoteCount');


/**
 * A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.
 */
class Question extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Question';
  }

  set acceptedAnswer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Answer');
    this[acceptedAnswer] = this.constructor.toArray(sanitized);
  }

  get acceptedAnswer() {
    let value = this[acceptedAnswer];
    return this.constructor.fromArray(value);
  }  set answerCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[answerCount] = this.constructor.toArray(sanitized);
  }

  get answerCount() {
    let value = this[answerCount];
    return this.constructor.fromArray(value);
  }  set downvoteCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[downvoteCount] = this.constructor.toArray(sanitized);
  }

  get downvoteCount() {
    let value = this[downvoteCount];
    return this.constructor.fromArray(value);
  }  set suggestedAnswer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Answer');
    this[suggestedAnswer] = this.constructor.toArray(sanitized);
  }

  get suggestedAnswer() {
    let value = this[suggestedAnswer];
    return this.constructor.fromArray(value);
  }  set upvoteCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[upvoteCount] = this.constructor.toArray(sanitized);
  }

  get upvoteCount() {
    let value = this[upvoteCount];
    return this.constructor.fromArray(value);
  }

}

export default Question;
