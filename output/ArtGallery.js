/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import EntertainmentBusiness from './EntertainmentBusiness';

const _debug = debug('moshi:classes:ArtGallery');


/**
 * An art gallery.
 */
class ArtGallery extends EntertainmentBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ArtGallery';
  }



}

export default ArtGallery;
