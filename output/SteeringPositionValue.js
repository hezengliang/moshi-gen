/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import QualitativeValue from './QualitativeValue';

const _debug = debug('moshi:classes:SteeringPositionValue');


/**
 * A value indicating a steering position.
 */
class SteeringPositionValue extends QualitativeValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SteeringPositionValue';
  }



}

export default SteeringPositionValue;
