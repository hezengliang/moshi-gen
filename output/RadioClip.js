/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Clip from './Clip';

const _debug = debug('moshi:classes:RadioClip');


/**
 * A short radio program or a segment/part of a radio program.
 */
class RadioClip extends Clip {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'RadioClip';
  }



}

export default RadioClip;
