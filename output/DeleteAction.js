/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import UpdateAction from './UpdateAction';

const _debug = debug('moshi:classes:DeleteAction');


/**
 * The act of editing a recipient by removing one of its objects.
 */
class DeleteAction extends UpdateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DeleteAction';
  }



}

export default DeleteAction;
