/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Action from './Action';

const _debug = debug('moshi:classes:ControlAction');


/**
 * An agent controls a device or application.
 */
class ControlAction extends Action {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ControlAction';
  }



}

export default ControlAction;
