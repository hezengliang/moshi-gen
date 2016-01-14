/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import HomeAndConstructionBusiness from './HomeAndConstructionBusiness';

const _debug = debug('moshi:classes:HousePainter');


/**
 * A house painting service.
 */
class HousePainter extends HomeAndConstructionBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'HousePainter';
  }



}

export default HousePainter;
