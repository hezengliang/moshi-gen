/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ConsumeAction from './ConsumeAction';

const _debug = debug('moshi:classes:EatAction');


/**
 * The act of swallowing solid objects.
 */
class EatAction extends ConsumeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'EatAction';
  }



}

export default EatAction;
