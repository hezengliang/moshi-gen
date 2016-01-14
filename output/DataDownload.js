/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MediaObject from './MediaObject';

const _debug = debug('moshi:classes:DataDownload');


/**
 * A dataset in downloadable form.
 */
class DataDownload extends MediaObject {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DataDownload';
  }



}

export default DataDownload;
