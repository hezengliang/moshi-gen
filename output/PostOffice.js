/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import GovernmentOffice from './GovernmentOffice';

const _debug = debug('moshi:classes:PostOffice');


/**
 * A post office.
 */
class PostOffice extends GovernmentOffice {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PostOffice';
  }



}

export default PostOffice;
