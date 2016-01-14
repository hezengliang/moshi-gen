/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Quantity from './Quantity';

const _debug = debug('moshi:classes:Duration');


/**
 * Quantity: Duration (use ISO 8601 duration format).
 */
class Duration extends Quantity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Duration';
  }



}

export default Duration;
