/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MoveAction from './MoveAction';

const _debug = debug('moshi:classes:DepartAction');


/**
 * The act of departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.
 */
class DepartAction extends MoveAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DepartAction';
  }



}

export default DepartAction;
