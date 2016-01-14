/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import UserInteraction from './UserInteraction';

const _debug = debug('moshi:classes:UserComments');
const commentText = Symbol.for('commentText');
const commentTime = Symbol.for('commentTime');
const creator = Symbol.for('creator');
const discusses = Symbol.for('discusses');
const replyToUrl = Symbol.for('replyToUrl');


/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use Action-based vocabulary, alongside types such as Comment.
 */
class UserComments extends UserInteraction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'UserComments';
  }

  set commentText(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[commentText] = this.constructor.toArray(sanitized);
  }

  get commentText() {
    let value = this[commentText];
    return this.constructor.fromArray(value);
  }  set commentTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[commentTime] = this.constructor.toArray(sanitized);
  }

  get commentTime() {
    let value = this[commentTime];
    return this.constructor.fromArray(value);
  }  set creator(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[creator] = this.constructor.toArray(sanitized);
  }

  get creator() {
    let value = this[creator];
    return this.constructor.fromArray(value);
  }  set discusses(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[discusses] = this.constructor.toArray(sanitized);
  }

  get discusses() {
    let value = this[discusses];
    return this.constructor.fromArray(value);
  }  set replyToUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[replyToUrl] = this.constructor.toArray(sanitized);
  }

  get replyToUrl() {
    let value = this[replyToUrl];
    return this.constructor.fromArray(value);
  }

}

export default UserComments;
