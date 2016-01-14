/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PerformingGroup from './PerformingGroup';

const _debug = debug('moshi:classes:MusicGroup');
const album = Symbol.for('album');
const genre = Symbol.for('genre');
const track = Symbol.for('track');


/**
 * A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
 */
class MusicGroup extends PerformingGroup {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MusicGroup';
  }

  set album(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicAlbum');
    this[album] = this.constructor.toArray(sanitized);
  }

  get album() {
    let value = this[album];
    return this.constructor.fromArray(value);
  }  set genre(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','URL');
    this[genre] = this.constructor.toArray(sanitized);
  }

  get genre() {
    let value = this[genre];
    return this.constructor.fromArray(value);
  }  set track(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ItemList','MusicRecording');
    this[track] = this.constructor.toArray(sanitized);
  }

  get track() {
    let value = this[track];
    return this.constructor.fromArray(value);
  }

}

export default MusicGroup;
