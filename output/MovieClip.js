/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Clip from './Clip';

const _debug = debug('moshi:classes:MovieClip');


/**
 * A short segment/part of a movie.
 */
class MovieClip extends Clip {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MovieClip';
  }



}

export default MovieClip;
