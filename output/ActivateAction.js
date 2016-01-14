/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ControlAction from './ControlAction';

const _debug = debug('moshi:classes:ActivateAction');


/**
 * The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight).
 */
class ActivateAction extends ControlAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ActivateAction';
  }



}

export default ActivateAction;
