/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Enumeration from './Enumeration';

const _debug = debug('moshi:classes:MusicReleaseFormatType');


/**
 * Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 */
class MusicReleaseFormatType extends Enumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MusicReleaseFormatType';
  }



}

export default MusicReleaseFormatType;
