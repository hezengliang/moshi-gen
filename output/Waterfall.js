/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import BodyOfWater from './BodyOfWater';

const _debug = debug('moshi:classes:Waterfall');


/**
 * A waterfall, like Niagara.
 */
class Waterfall extends BodyOfWater {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Waterfall';
  }



}

export default Waterfall;
