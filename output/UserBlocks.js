/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import UserInteraction from './UserInteraction';

const _debug = debug('moshi:classes:UserBlocks');


/**
 * UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use Action-based vocabulary, alongside types such as Comment.
 */
class UserBlocks extends UserInteraction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'UserBlocks';
  }



}

export default UserBlocks;
