/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CommunicateAction from './CommunicateAction';

const _debug = debug('moshi:classes:CommentAction');
const resultComment = Symbol.for('resultComment');


/**
 * The act of generating a comment about a subject.
 */
class CommentAction extends CommunicateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CommentAction';
  }

  set resultComment(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Comment');
    this[resultComment] = this.constructor.toArray(sanitized);
  }

  get resultComment() {
    let value = this[resultComment];
    return this.constructor.fromArray(value);
  }

}

export default CommentAction;
