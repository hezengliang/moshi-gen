/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ConsumeAction from './ConsumeAction';

const _debug = debug('moshi:classes:DrinkAction');


/**
 * The act of swallowing liquids.
 */
class DrinkAction extends ConsumeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DrinkAction';
  }



}

export default DrinkAction;
