/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TransferAction from './TransferAction';

const _debug = debug('moshi:classes:TakeAction');


/**
 * The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.Related actions:GiveAction: The reciprocal of TakeAction.ReceiveAction: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.
 */
class TakeAction extends TransferAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TakeAction';
  }



}

export default TakeAction;
