/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ControlAction from './ControlAction';

const _debug = debug('moshi:classes:DeactivateAction');


/**
 * The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight).
 */
class DeactivateAction extends ControlAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DeactivateAction';
  }



}

export default DeactivateAction;
