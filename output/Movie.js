/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Movie');
const actor = Symbol.for('actor');
const countryOfOrigin = Symbol.for('countryOfOrigin');
const director = Symbol.for('director');
const duration = Symbol.for('duration');
const musicBy = Symbol.for('musicBy');
const productionCompany = Symbol.for('productionCompany');
const subtitleLanguage = Symbol.for('subtitleLanguage');
const trailer = Symbol.for('trailer');


/**
 * A movie.
 */
class Movie extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Movie';
  }

  set actor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[actor] = this.constructor.toArray(sanitized);
  }

  get actor() {
    let value = this[actor];
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
  }  set duration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[duration] = this.constructor.toArray(sanitized);
  }

  get duration() {
    let value = this[duration];
    return this.constructor.fromArray(value);
  }  set musicBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','MusicGroup');
    this[musicBy] = this.constructor.toArray(sanitized);
  }

  get musicBy() {
    let value = this[musicBy];
    return this.constructor.fromArray(value);
  }  set productionCompany(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[productionCompany] = this.constructor.toArray(sanitized);
  }

  get productionCompany() {
    let value = this[productionCompany];
    return this.constructor.fromArray(value);
  }  set subtitleLanguage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Language','Text');
    this[subtitleLanguage] = this.constructor.toArray(sanitized);
  }

  get subtitleLanguage() {
    let value = this[subtitleLanguage];
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

export default Movie;
