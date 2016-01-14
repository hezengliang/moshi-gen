/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import GovernmentBuilding from './GovernmentBuilding';

const _debug = debug('moshi:classes:Courthouse');


/**
 * A courthouse.
 */
class Courthouse extends GovernmentBuilding {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Courthouse';
  }



}

export default Courthouse;
