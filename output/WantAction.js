/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ReactAction from './ReactAction';

const _debug = debug('moshi:classes:WantAction');


/**
 * The act of expressing a desire about the object. An agent wants an object.
 */
class WantAction extends ReactAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'WantAction';
  }



}

export default WantAction;
