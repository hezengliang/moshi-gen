/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import InsertAction from './InsertAction';

const _debug = debug('moshi:classes:PrependAction');


/**
 * The act of inserting at the beginning if an ordered collection.
 */
class PrependAction extends InsertAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PrependAction';
  }



}

export default PrependAction;
