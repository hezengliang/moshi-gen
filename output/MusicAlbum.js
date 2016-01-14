/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MusicPlaylist from './MusicPlaylist';

const _debug = debug('moshi:classes:MusicAlbum');
const albumProductionType = Symbol.for('albumProductionType');
const albumRelease = Symbol.for('albumRelease');
const albumReleaseType = Symbol.for('albumReleaseType');
const byArtist = Symbol.for('byArtist');


/**
 * A collection of music tracks.
 */
class MusicAlbum extends MusicPlaylist {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MusicAlbum';
  }

  set albumProductionType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicAlbumProductionType');
    this[albumProductionType] = this.constructor.toArray(sanitized);
  }

  get albumProductionType() {
    let value = this[albumProductionType];
    return this.constructor.fromArray(value);
  }  set albumRelease(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicRelease');
    this[albumRelease] = this.constructor.toArray(sanitized);
  }

  get albumRelease() {
    let value = this[albumRelease];
    return this.constructor.fromArray(value);
  }  set albumReleaseType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicAlbumReleaseType');
    this[albumReleaseType] = this.constructor.toArray(sanitized);
  }

  get albumReleaseType() {
    let value = this[albumReleaseType];
    return this.constructor.fromArray(value);
  }  set byArtist(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicGroup');
    this[byArtist] = this.constructor.toArray(sanitized);
  }

  get byArtist() {
    let value = this[byArtist];
    return this.constructor.fromArray(value);
  }

}

export default MusicAlbum;
