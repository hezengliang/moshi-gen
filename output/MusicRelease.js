/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MusicPlaylist from './MusicPlaylist';

const _debug = debug('moshi:classes:MusicRelease');
const catalogNumber = Symbol.for('catalogNumber');
const creditedTo = Symbol.for('creditedTo');
const duration = Symbol.for('duration');
const musicReleaseFormat = Symbol.for('musicReleaseFormat');
const recordLabel = Symbol.for('recordLabel');
const releaseOf = Symbol.for('releaseOf');


/**
 * A MusicRelease is a specific release of a music album.
 */
class MusicRelease extends MusicPlaylist {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MusicRelease';
  }

  set catalogNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[catalogNumber] = this.constructor.toArray(sanitized);
  }

  get catalogNumber() {
    let value = this[catalogNumber];
    return this.constructor.fromArray(value);
  }  set creditedTo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[creditedTo] = this.constructor.toArray(sanitized);
  }

  get creditedTo() {
    let value = this[creditedTo];
    return this.constructor.fromArray(value);
  }  set duration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[duration] = this.constructor.toArray(sanitized);
  }

  get duration() {
    let value = this[duration];
    return this.constructor.fromArray(value);
  }  set musicReleaseFormat(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicReleaseFormatType');
    this[musicReleaseFormat] = this.constructor.toArray(sanitized);
  }

  get musicReleaseFormat() {
    let value = this[musicReleaseFormat];
    return this.constructor.fromArray(value);
  }  set recordLabel(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[recordLabel] = this.constructor.toArray(sanitized);
  }

  get recordLabel() {
    let value = this[recordLabel];
    return this.constructor.fromArray(value);
  }  set releaseOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicAlbum');
    this[releaseOf] = this.constructor.toArray(sanitized);
  }

  get releaseOf() {
    let value = this[releaseOf];
    return this.constructor.fromArray(value);
  }

}

export default MusicRelease;
