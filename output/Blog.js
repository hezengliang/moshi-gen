/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Blog');
const blogPost = Symbol.for('blogPost');


/**
 * A blog.
 */
class Blog extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Blog';
  }

  set blogPost(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BlogPosting');
    this[blogPost] = this.constructor.toArray(sanitized);
  }

  get blogPost() {
    let value = this[blogPost];
    return this.constructor.fromArray(value);
  }

}

export default Blog;
