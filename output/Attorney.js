/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import LegalService from './LegalService';

const _debug = debug('moshi:classes:Attorney');


/**
 * Professional service: Attorney. This type is deprecated - LegalService is more inclusive and less ambiguous.
 */
class Attorney extends LegalService {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Attorney';
  }



}

export default Attorney;
