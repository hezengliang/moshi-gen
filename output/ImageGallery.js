/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CollectionPage from './CollectionPage';

const _debug = debug('moshi:classes:ImageGallery');


/**
 * Web page type: Image gallery page.
 */
class ImageGallery extends CollectionPage {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ImageGallery';
  }



}

export default ImageGallery;
