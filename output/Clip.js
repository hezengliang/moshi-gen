/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Clip');
const actor = Symbol.for('actor');
const clipNumber = Symbol.for('clipNumber');
const director = Symbol.for('director');
const musicBy = Symbol.for('musicBy');
const partOfEpisode = Symbol.for('partOfEpisode');
const partOfSeason = Symbol.for('partOfSeason');
const partOfSeries = Symbol.for('partOfSeries');


/**
 * A short TV or radio program or a segment/part of a program.
 */
class Clip extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Clip';
  }

  set actor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[actor] = this.constructor.toArray(sanitized);
  }

  get actor() {
    let value = this[actor];
    return this.constructor.fromArray(value);
  }  set clipNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[clipNumber] = this.constructor.toArray(sanitized);
  }

  get clipNumber() {
    let value = this[clipNumber];
    return this.constructor.fromArray(value);
  }  set director(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[director] = this.constructor.toArray(sanitized);
  }

  get director() {
    let value = this[director];
    return this.constructor.fromArray(value);
  }  set musicBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','MusicGroup');
    this[musicBy] = this.constructor.toArray(sanitized);
  }

  get musicBy() {
    let value = this[musicBy];
    return this.constructor.fromArray(value);
  }  set partOfEpisode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Episode');
    this[partOfEpisode] = this.constructor.toArray(sanitized);
  }

  get partOfEpisode() {
    let value = this[partOfEpisode];
    return this.constructor.fromArray(value);
  }  set partOfSeason(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWorkSeason');
    this[partOfSeason] = this.constructor.toArray(sanitized);
  }

  get partOfSeason() {
    let value = this[partOfSeason];
    return this.constructor.fromArray(value);
  }  set partOfSeries(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWorkSeries');
    this[partOfSeries] = this.constructor.toArray(sanitized);
  }

  get partOfSeries() {
    let value = this[partOfSeries];
    return this.constructor.fromArray(value);
  }

}

export default Clip;
