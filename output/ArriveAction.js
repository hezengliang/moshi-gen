/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MoveAction from './MoveAction';

const _debug = debug('moshi:classes:ArriveAction');


/**
 * The act of arriving at a place. An agent arrives at a destination from an fromLocation, optionally with participants.
 */
class ArriveAction extends MoveAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ArriveAction';
  }



}

export default ArriveAction;
