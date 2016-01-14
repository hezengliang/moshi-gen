/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AllocateAction from './AllocateAction';

const _debug = debug('moshi:classes:AssignAction');


/**
 * The act of allocating an action/event/task to some destination (someone or something).
 */
class AssignAction extends AllocateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AssignAction';
  }



}

export default AssignAction;
