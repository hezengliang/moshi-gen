/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Enumeration from './Enumeration';

const _debug = debug('moshi:classes:MusicAlbumProductionType');


/**
 * Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
 */
class MusicAlbumProductionType extends Enumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MusicAlbumProductionType';
  }



}

export default MusicAlbumProductionType;
