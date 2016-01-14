/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MediaObject from './MediaObject';

const _debug = debug('moshi:classes:VideoObject');
const actor = Symbol.for('actor');
const caption = Symbol.for('caption');
const director = Symbol.for('director');
const musicBy = Symbol.for('musicBy');
const thumbnail = Symbol.for('thumbnail');
const transcript = Symbol.for('transcript');
const videoFrameSize = Symbol.for('videoFrameSize');
const videoQuality = Symbol.for('videoQuality');


/**
 * A video file.
 */
class VideoObject extends MediaObject {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'VideoObject';
  }

  set actor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[actor] = this.constructor.toArray(sanitized);
  }

  get actor() {
    let value = this[actor];
    return this.constructor.fromArray(value);
  }  set caption(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[caption] = this.constructor.toArray(sanitized);
  }

  get caption() {
    let value = this[caption];
    return this.constructor.fromArray(value);
  }  set director(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[director] = this.constructor.toArray(sanitized);
  }

  get director() {
    let value = this[director];
    return this.constructor.fromArray(value);
  }  set musicBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicGroup','Person');
    this[musicBy] = this.constructor.toArray(sanitized);
  }

  get musicBy() {
    let value = this[musicBy];
    return this.constructor.fromArray(value);
  }  set thumbnail(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ImageObject');
    this[thumbnail] = this.constructor.toArray(sanitized);
  }

  get thumbnail() {
    let value = this[thumbnail];
    return this.constructor.fromArray(value);
  }  set transcript(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[transcript] = this.constructor.toArray(sanitized);
  }

  get transcript() {
    let value = this[transcript];
    return this.constructor.fromArray(value);
  }  set videoFrameSize(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[videoFrameSize] = this.constructor.toArray(sanitized);
  }

  get videoFrameSize() {
    let value = this[videoFrameSize];
    return this.constructor.fromArray(value);
  }  set videoQuality(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[videoQuality] = this.constructor.toArray(sanitized);
  }

  get videoQuality() {
    let value = this[videoQuality];
    return this.constructor.fromArray(value);
  }

}

export default VideoObject;
