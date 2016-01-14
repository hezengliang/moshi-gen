/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Comment from './Comment';

const _debug = debug('moshi:classes:Answer');


/**
 * An answer offered to a question; perhaps correct, perhaps opinionated or wrong.
 */
class Answer extends Comment {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Answer';
  }



}

export default Answer;
