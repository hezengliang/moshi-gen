/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import UseAction from './UseAction';

const _debug = debug('moshi:classes:WearAction');


/**
 * The act of dressing oneself in clothing.
 */
class WearAction extends UseAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'WearAction';
  }



}

export default WearAction;
