/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Article from './Article';

const _debug = debug('moshi:classes:SocialMediaPosting');
const sharedContent = Symbol.for('sharedContent');


/**
 * A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 */
class SocialMediaPosting extends Article {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SocialMediaPosting';
  }

  set sharedContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[sharedContent] = this.constructor.toArray(sanitized);
  }

  get sharedContent() {
    let value = this[sharedContent];
    return this.constructor.fromArray(value);
  }

}

export default SocialMediaPosting;
