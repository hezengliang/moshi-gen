/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Episode');
const actor = Symbol.for('actor');
const director = Symbol.for('director');
const episodeNumber = Symbol.for('episodeNumber');
const musicBy = Symbol.for('musicBy');
const partOfSeason = Symbol.for('partOfSeason');
const partOfSeries = Symbol.for('partOfSeries');
const productionCompany = Symbol.for('productionCompany');
const trailer = Symbol.for('trailer');


/**
 * A media episode (e.g. TV, radio, video game) which can be part of a series or season.
 */
class Episode extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Episode';
  }

  set actor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[actor] = this.constructor.toArray(sanitized);
  }

  get actor() {
    let value = this[actor];
    return this.constructor.fromArray(value);
  }  set director(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[director] = this.constructor.toArray(sanitized);
  }

  get director() {
    let value = this[director];
    return this.constructor.fromArray(value);
  }  set episodeNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[episodeNumber] = this.constructor.toArray(sanitized);
  }

  get episodeNumber() {
    let value = this[episodeNumber];
    return this.constructor.fromArray(value);
  }  set musicBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','MusicGroup');
    this[musicBy] = this.constructor.toArray(sanitized);
  }

  get musicBy() {
    let value = this[musicBy];
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
  }  set productionCompany(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[productionCompany] = this.constructor.toArray(sanitized);
  }

  get productionCompany() {
    let value = this[productionCompany];
    return this.constructor.fromArray(value);
  }  set trailer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'VideoObject');
    this[trailer] = this.constructor.toArray(sanitized);
  }

  get trailer() {
    let value = this[trailer];
    return this.constructor.fromArray(value);
  }

}

export default Episode;
