/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import BodyOfWater from './BodyOfWater';

const _debug = debug('moshi:classes:Reservoir');


/**
 * A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir.
 */
class Reservoir extends BodyOfWater {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Reservoir';
  }



}

export default Reservoir;
