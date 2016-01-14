/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreateAction from './CreateAction';

const _debug = debug('moshi:classes:PhotographAction');


/**
 * The act of capturing still images of objects using a camera.
 */
class PhotographAction extends CreateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PhotographAction';
  }



}

export default PhotographAction;
