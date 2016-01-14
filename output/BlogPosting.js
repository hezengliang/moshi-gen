/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import SocialMediaPosting from './SocialMediaPosting';

const _debug = debug('moshi:classes:BlogPosting');


/**
 * A blog post.
 */
class BlogPosting extends SocialMediaPosting {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BlogPosting';
  }



}

export default BlogPosting;
