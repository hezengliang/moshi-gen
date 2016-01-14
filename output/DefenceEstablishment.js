/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import GovernmentBuilding from './GovernmentBuilding';

const _debug = debug('moshi:classes:DefenceEstablishment');


/**
 * A defence establishment, such as an army or navy base.
 */
class DefenceEstablishment extends GovernmentBuilding {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DefenceEstablishment';
  }



}

export default DefenceEstablishment;
