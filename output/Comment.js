/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Comment');
const downvoteCount = Symbol.for('downvoteCount');
const parentItem = Symbol.for('parentItem');
const upvoteCount = Symbol.for('upvoteCount');


/**
 * A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the "text" property, and its topic via "about", properties shared with all CreativeWorks.
 */
class Comment extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Comment';
  }

  set downvoteCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[downvoteCount] = this.constructor.toArray(sanitized);
  }

  get downvoteCount() {
    let value = this[downvoteCount];
    return this.constructor.fromArray(value);
  }  set parentItem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Question');
    this[parentItem] = this.constructor.toArray(sanitized);
  }

  get parentItem() {
    let value = this[parentItem];
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

export default Comment;
