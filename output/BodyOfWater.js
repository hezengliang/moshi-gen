/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Landform from './Landform';

const _debug = debug('moshi:classes:BodyOfWater');


/**
 * A body of water, such as a sea, ocean, or lake.
 */
class BodyOfWater extends Landform {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BodyOfWater';
  }



}

export default BodyOfWater;
