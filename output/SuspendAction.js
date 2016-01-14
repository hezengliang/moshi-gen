/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ControlAction from './ControlAction';

const _debug = debug('moshi:classes:SuspendAction');


/**
 * The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).
 */
class SuspendAction extends ControlAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SuspendAction';
  }



}

export default SuspendAction;
