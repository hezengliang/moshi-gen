/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Place from './Place';

const _debug = debug('moshi:classes:AdministrativeArea');


/**
 * A geographical region, typically under the jurisdiction of a particular government.
 */
class AdministrativeArea extends Place {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AdministrativeArea';
  }



}

export default AdministrativeArea;
