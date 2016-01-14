/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import QualitativeValue from './QualitativeValue';

const _debug = debug('moshi:classes:CarUsageType');


/**
 * A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.
 */
class CarUsageType extends QualitativeValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CarUsageType';
  }



}

export default CarUsageType;
