/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Quantity from './Quantity';

const _debug = debug('moshi:classes:Energy');


/**
 * Properties that take Energy as values are of the form '<Number> <Energy unit of measure>'.
 */
class Energy extends Quantity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Energy';
  }



}

export default Energy;
