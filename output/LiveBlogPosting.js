/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import BlogPosting from './BlogPosting';

const _debug = debug('moshi:classes:LiveBlogPosting');
const coverageEndTime = Symbol.for('coverageEndTime');
const coverageStartTime = Symbol.for('coverageStartTime');
const liveBlogUpdate = Symbol.for('liveBlogUpdate');


/**
 * A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.
 */
class LiveBlogPosting extends BlogPosting {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'LiveBlogPosting';
  }

  set coverageEndTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[coverageEndTime] = this.constructor.toArray(sanitized);
  }

  get coverageEndTime() {
    let value = this[coverageEndTime];
    return this.constructor.fromArray(value);
  }  set coverageStartTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[coverageStartTime] = this.constructor.toArray(sanitized);
  }

  get coverageStartTime() {
    let value = this[coverageStartTime];
    return this.constructor.fromArray(value);
  }  set liveBlogUpdate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BlogPosting');
    this[liveBlogUpdate] = this.constructor.toArray(sanitized);
  }

  get liveBlogUpdate() {
    let value = this[liveBlogUpdate];
    return this.constructor.fromArray(value);
  }

}

export default LiveBlogPosting;
