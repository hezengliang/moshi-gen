/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:CreativeWorkSeason');
const actor = Symbol.for('actor');
const director = Symbol.for('director');
const endDate = Symbol.for('endDate');
const episode = Symbol.for('episode');
const numberOfEpisodes = Symbol.for('numberOfEpisodes');
const partOfSeries = Symbol.for('partOfSeries');
const productionCompany = Symbol.for('productionCompany');
const seasonNumber = Symbol.for('seasonNumber');
const startDate = Symbol.for('startDate');
const trailer = Symbol.for('trailer');


/**
 * A media season e.g. tv, radio, video game etc.
 */
class CreativeWorkSeason extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CreativeWorkSeason';
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
  }  set endDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[endDate] = this.constructor.toArray(sanitized);
  }

  get endDate() {
    let value = this[endDate];
    return this.constructor.fromArray(value);
  }  set episode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Episode');
    this[episode] = this.constructor.toArray(sanitized);
  }

  get episode() {
    let value = this[episode];
    return this.constructor.fromArray(value);
  }  set numberOfEpisodes(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[numberOfEpisodes] = this.constructor.toArray(sanitized);
  }

  get numberOfEpisodes() {
    let value = this[numberOfEpisodes];
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
  }  set seasonNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','Integer');
    this[seasonNumber] = this.constructor.toArray(sanitized);
  }

  get seasonNumber() {
    let value = this[seasonNumber];
    return this.constructor.fromArray(value);
  }  set startDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[startDate] = this.constructor.toArray(sanitized);
  }

  get startDate() {
    let value = this[startDate];
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

export default CreativeWorkSeason;
