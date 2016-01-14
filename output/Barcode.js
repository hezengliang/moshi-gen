/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ImageObject from './ImageObject';

const _debug = debug('moshi:classes:Barcode');


/**
 * An image of a visual machine-readable code such as a barcode or QR code.
 */
class Barcode extends ImageObject {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Barcode';
  }



}

export default Barcode;
