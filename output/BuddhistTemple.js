/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PlaceOfWorship from './PlaceOfWorship';

const _debug = debug('moshi:classes:BuddhistTemple');


/**
 * A Buddhist temple.
 */
class BuddhistTemple extends PlaceOfWorship {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BuddhistTemple';
  }



}

export default BuddhistTemple;
