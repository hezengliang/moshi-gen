/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Permit from './Permit';

const _debug = debug('moshi:classes:GovernmentPermit');


/**
 * A permit issued by a government agency.
 */
class GovernmentPermit extends Permit {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'GovernmentPermit';
  }



}

export default GovernmentPermit;
