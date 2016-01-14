/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AllocateAction from './AllocateAction';

const _debug = debug('moshi:classes:RejectAction');


/**
 * The act of rejecting to/adopting an object.Related actions:AcceptAction: The antonym of RejectAction.
 */
class RejectAction extends AllocateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'RejectAction';
  }



}

export default RejectAction;
