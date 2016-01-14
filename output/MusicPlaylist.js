/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:MusicPlaylist');
const numTracks = Symbol.for('numTracks');
const track = Symbol.for('track');


/**
 * A collection of music tracks in playlist form.
 */
class MusicPlaylist extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MusicPlaylist';
  }

  set numTracks(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[numTracks] = this.constructor.toArray(sanitized);
  }

  get numTracks() {
    let value = this[numTracks];
    return this.constructor.fromArray(value);
  }  set track(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicRecording','ItemList');
    this[track] = this.constructor.toArray(sanitized);
  }

  get track() {
    let value = this[track];
    return this.constructor.fromArray(value);
  }

}

export default MusicPlaylist;
