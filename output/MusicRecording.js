/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:MusicRecording');
const byArtist = Symbol.for('byArtist');
const duration = Symbol.for('duration');
const inAlbum = Symbol.for('inAlbum');
const inPlaylist = Symbol.for('inPlaylist');
const isrcCode = Symbol.for('isrcCode');
const recordingOf = Symbol.for('recordingOf');


/**
 * A music recording (track), usually a single song.
 */
class MusicRecording extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MusicRecording';
  }

  set byArtist(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicGroup');
    this[byArtist] = this.constructor.toArray(sanitized);
  }

  get byArtist() {
    let value = this[byArtist];
    return this.constructor.fromArray(value);
  }  set duration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[duration] = this.constructor.toArray(sanitized);
  }

  get duration() {
    let value = this[duration];
    return this.constructor.fromArray(value);
  }  set inAlbum(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicAlbum');
    this[inAlbum] = this.constructor.toArray(sanitized);
  }

  get inAlbum() {
    let value = this[inAlbum];
    return this.constructor.fromArray(value);
  }  set inPlaylist(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicPlaylist');
    this[inPlaylist] = this.constructor.toArray(sanitized);
  }

  get inPlaylist() {
    let value = this[inPlaylist];
    return this.constructor.fromArray(value);
  }  set isrcCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[isrcCode] = this.constructor.toArray(sanitized);
  }

  get isrcCode() {
    let value = this[isrcCode];
    return this.constructor.fromArray(value);
  }  set recordingOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicComposition');
    this[recordingOf] = this.constructor.toArray(sanitized);
  }

  get recordingOf() {
    let value = this[recordingOf];
    return this.constructor.fromArray(value);
  }

}

export default MusicRecording;
