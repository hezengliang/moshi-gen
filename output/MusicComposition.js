/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:MusicComposition');
const composer = Symbol.for('composer');
const firstPerformance = Symbol.for('firstPerformance');
const includedComposition = Symbol.for('includedComposition');
const iswcCode = Symbol.for('iswcCode');
const lyricist = Symbol.for('lyricist');
const lyrics = Symbol.for('lyrics');
const musicArrangement = Symbol.for('musicArrangement');
const musicCompositionForm = Symbol.for('musicCompositionForm');
const musicalKey = Symbol.for('musicalKey');
const recordedAs = Symbol.for('recordedAs');


/**
 * A musical composition.
 */
class MusicComposition extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MusicComposition';
  }

  set composer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[composer] = this.constructor.toArray(sanitized);
  }

  get composer() {
    let value = this[composer];
    return this.constructor.fromArray(value);
  }  set firstPerformance(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Event');
    this[firstPerformance] = this.constructor.toArray(sanitized);
  }

  get firstPerformance() {
    let value = this[firstPerformance];
    return this.constructor.fromArray(value);
  }  set includedComposition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicComposition');
    this[includedComposition] = this.constructor.toArray(sanitized);
  }

  get includedComposition() {
    let value = this[includedComposition];
    return this.constructor.fromArray(value);
  }  set iswcCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[iswcCode] = this.constructor.toArray(sanitized);
  }

  get iswcCode() {
    let value = this[iswcCode];
    return this.constructor.fromArray(value);
  }  set lyricist(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[lyricist] = this.constructor.toArray(sanitized);
  }

  get lyricist() {
    let value = this[lyricist];
    return this.constructor.fromArray(value);
  }  set lyrics(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[lyrics] = this.constructor.toArray(sanitized);
  }

  get lyrics() {
    let value = this[lyrics];
    return this.constructor.fromArray(value);
  }  set musicArrangement(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicComposition');
    this[musicArrangement] = this.constructor.toArray(sanitized);
  }

  get musicArrangement() {
    let value = this[musicArrangement];
    return this.constructor.fromArray(value);
  }  set musicCompositionForm(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[musicCompositionForm] = this.constructor.toArray(sanitized);
  }

  get musicCompositionForm() {
    let value = this[musicCompositionForm];
    return this.constructor.fromArray(value);
  }  set musicalKey(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[musicalKey] = this.constructor.toArray(sanitized);
  }

  get musicalKey() {
    let value = this[musicalKey];
    return this.constructor.fromArray(value);
  }  set recordedAs(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MusicRecording');
    this[recordedAs] = this.constructor.toArray(sanitized);
  }

  get recordedAs() {
    let value = this[recordedAs];
    return this.constructor.fromArray(value);
  }

}

export default MusicComposition;
