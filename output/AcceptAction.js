/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AllocateAction from './AllocateAction';

const _debug = debug('moshi:classes:AcceptAction');


/**
 * The act of committing to/adopting an object.Related actions:RejectAction: The antonym of AcceptAction.
 */
class AcceptAction extends AllocateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AcceptAction';
  }



}

export default AcceptAction;
