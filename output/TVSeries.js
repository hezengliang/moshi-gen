/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWorkSeries from './CreativeWorkSeries';

const _debug = debug('moshi:classes:TVSeries');
const actor = Symbol.for('actor');
const containsSeason = Symbol.for('containsSeason');
const countryOfOrigin = Symbol.for('countryOfOrigin');
const director = Symbol.for('director');
const episode = Symbol.for('episode');
const musicBy = Symbol.for('musicBy');
const numberOfEpisodes = Symbol.for('numberOfEpisodes');
const numberOfSeasons = Symbol.for('numberOfSeasons');
const productionCompany = Symbol.for('productionCompany');
const trailer = Symbol.for('trailer');


/**
 * CreativeWorkSeries dedicated to TV broadcast and associated online delivery.
 */
class TVSeries extends CreativeWorkSeries {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TVSeries';
  }

  set actor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[actor] = this.constructor.toArray(sanitized);
  }

  get actor() {
    let value = this[actor];
    return this.constructor.fromArray(value);
  }  set containsSeason(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWorkSeason');
    this[containsSeason] = this.constructor.toArray(sanitized);
  }

  get containsSeason() {
    let value = this[containsSeason];
    return this.constructor.fromArray(value);
  }  set countryOfOrigin(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Country');
    this[countryOfOrigin] = this.constructor.toArray(sanitized);
  }

  get countryOfOrigin() {
    let value = this[countryOfOrigin];
    return this.constructor.fromArray(value);
  }  set director(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[director] = this.constructor.toArray(sanitized);
  }

  get director() {
    let value = this[director];
    return this.constructor.fromArray(value);
  }  set episode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Episode');
    this[episode] = this.constructor.toArray(sanitized);
  }

  get episode() {
    let value = this[episode];
    return this.constructor.fromArray(value);
  }  set musicBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','MusicGroup');
    this[musicBy] = this.constructor.toArray(sanitized);
  }

  get musicBy() {
    let value = this[musicBy];
    return this.constructor.fromArray(value);
  }  set numberOfEpisodes(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[numberOfEpisodes] = this.constructor.toArray(sanitized);
  }

  get numberOfEpisodes() {
    let value = this[numberOfEpisodes];
    return this.constructor.fromArray(value);
  }  set numberOfSeasons(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[numberOfSeasons] = this.constructor.toArray(sanitized);
  }

  get numberOfSeasons() {
    let value = this[numberOfSeasons];
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

export default TVSeries;
