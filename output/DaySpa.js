/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import HealthAndBeautyBusiness from './HealthAndBeautyBusiness';

const _debug = debug('moshi:classes:DaySpa');


/**
 * A day spa.
 */
class DaySpa extends HealthAndBeautyBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DaySpa';
  }



}

export default DaySpa;
