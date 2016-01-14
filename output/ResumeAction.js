/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ControlAction from './ControlAction';

const _debug = debug('moshi:classes:ResumeAction');


/**
 * The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer).
 */
class ResumeAction extends ControlAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ResumeAction';
  }



}

export default ResumeAction;
