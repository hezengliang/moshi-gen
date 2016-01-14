/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import InteractAction from './InteractAction';

const _debug = debug('moshi:classes:BefriendAction');


/**
 * The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.Related actions:FollowAction: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.
 */
class BefriendAction extends InteractAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BefriendAction';
  }



}

export default BefriendAction;
