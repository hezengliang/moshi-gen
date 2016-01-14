/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Organization from './Organization';

const _debug = debug('moshi:classes:GovernmentOrganization');


/**
 * A governmental organization or agency.
 */
class GovernmentOrganization extends Organization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'GovernmentOrganization';
  }



}

export default GovernmentOrganization;
