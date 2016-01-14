/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ReactAction from './ReactAction';

const _debug = debug('moshi:classes:DislikeAction');


/**
 * The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.
 */
class DislikeAction extends ReactAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DislikeAction';
  }



}

export default DislikeAction;
