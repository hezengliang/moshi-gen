/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AssessAction from './AssessAction';

const _debug = debug('moshi:classes:IgnoreAction');


/**
 * The act of intentionally disregarding the object. An agent ignores an object.
 */
class IgnoreAction extends AssessAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'IgnoreAction';
  }



}

export default IgnoreAction;
