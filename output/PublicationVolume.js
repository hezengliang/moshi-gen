/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:PublicationVolume');
const pageEnd = Symbol.for('pageEnd');
const pageStart = Symbol.for('pageStart');
const pagination = Symbol.for('pagination');
const volumeNumber = Symbol.for('volumeNumber');


/**
 * A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year. See also blog post.
 */
class PublicationVolume extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PublicationVolume';
  }

  set pageEnd(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[pageEnd] = this.constructor.toArray(sanitized);
  }

  get pageEnd() {
    let value = this[pageEnd];
    return this.constructor.fromArray(value);
  }  set pageStart(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[pageStart] = this.constructor.toArray(sanitized);
  }

  get pageStart() {
    let value = this[pageStart];
    return this.constructor.fromArray(value);
  }  set pagination(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[pagination] = this.constructor.toArray(sanitized);
  }

  get pagination() {
    let value = this[pagination];
    return this.constructor.fromArray(value);
  }  set volumeNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[volumeNumber] = this.constructor.toArray(sanitized);
  }

  get volumeNumber() {
    let value = this[volumeNumber];
    return this.constructor.fromArray(value);
  }

}

export default PublicationVolume;
