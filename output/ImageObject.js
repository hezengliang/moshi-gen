/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MediaObject from './MediaObject';

const _debug = debug('moshi:classes:ImageObject');
const caption = Symbol.for('caption');
const exifData = Symbol.for('exifData');
const representativeOfPage = Symbol.for('representativeOfPage');
const thumbnail = Symbol.for('thumbnail');


/**
 * An image file.
 */
class ImageObject extends MediaObject {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ImageObject';
  }

  set caption(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[caption] = this.constructor.toArray(sanitized);
  }

  get caption() {
    let value = this[caption];
    return this.constructor.fromArray(value);
  }  set exifData(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','PropertyValue');
    this[exifData] = this.constructor.toArray(sanitized);
  }

  get exifData() {
    let value = this[exifData];
    return this.constructor.fromArray(value);
  }  set representativeOfPage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[representativeOfPage] = this.constructor.toArray(sanitized);
  }

  get representativeOfPage() {
    let value = this[representativeOfPage];
    return this.constructor.fromArray(value);
  }  set thumbnail(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ImageObject');
    this[thumbnail] = this.constructor.toArray(sanitized);
  }

  get thumbnail() {
    let value = this[thumbnail];
    return this.constructor.fromArray(value);
  }

}

export default ImageObject;
