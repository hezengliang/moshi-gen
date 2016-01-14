/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWorkSeries from './CreativeWorkSeries';

const _debug = debug('moshi:classes:VideoGameSeries');
const actor = Symbol.for('actor');
const characterAttribute = Symbol.for('characterAttribute');
const cheatCode = Symbol.for('cheatCode');
const containsSeason = Symbol.for('containsSeason');
const director = Symbol.for('director');
const episode = Symbol.for('episode');
const gameItem = Symbol.for('gameItem');
const gameLocation = Symbol.for('gameLocation');
const gamePlatform = Symbol.for('gamePlatform');
const musicBy = Symbol.for('musicBy');
const numberOfEpisodes = Symbol.for('numberOfEpisodes');
const numberOfPlayers = Symbol.for('numberOfPlayers');
const numberOfSeasons = Symbol.for('numberOfSeasons');
const playMode = Symbol.for('playMode');
const productionCompany = Symbol.for('productionCompany');
const quest = Symbol.for('quest');
const trailer = Symbol.for('trailer');


/**
 * A video game series.
 */
class VideoGameSeries extends CreativeWorkSeries {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'VideoGameSeries';
  }

  set actor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[actor] = this.constructor.toArray(sanitized);
  }

  get actor() {
    let value = this[actor];
    return this.constructor.fromArray(value);
  }  set characterAttribute(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[characterAttribute] = this.constructor.toArray(sanitized);
  }

  get characterAttribute() {
    let value = this[characterAttribute];
    return this.constructor.fromArray(value);
  }  set cheatCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[cheatCode] = this.constructor.toArray(sanitized);
  }

  get cheatCode() {
    let value = this[cheatCode];
    return this.constructor.fromArray(value);
  }  set containsSeason(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWorkSeason');
    this[containsSeason] = this.constructor.toArray(sanitized);
  }

  get containsSeason() {
    let value = this[containsSeason];
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
  }  set gameItem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[gameItem] = this.constructor.toArray(sanitized);
  }

  get gameItem() {
    let value = this[gameItem];
    return this.constructor.fromArray(value);
  }  set gameLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Place','PostalAddress');
    this[gameLocation] = this.constructor.toArray(sanitized);
  }

  get gameLocation() {
    let value = this[gameLocation];
    return this.constructor.fromArray(value);
  }  set gamePlatform(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Thing','Text');
    this[gamePlatform] = this.constructor.toArray(sanitized);
  }

  get gamePlatform() {
    let value = this[gamePlatform];
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
  }  set numberOfPlayers(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[numberOfPlayers] = this.constructor.toArray(sanitized);
  }

  get numberOfPlayers() {
    let value = this[numberOfPlayers];
    return this.constructor.fromArray(value);
  }  set numberOfSeasons(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[numberOfSeasons] = this.constructor.toArray(sanitized);
  }

  get numberOfSeasons() {
    let value = this[numberOfSeasons];
    return this.constructor.fromArray(value);
  }  set playMode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'GamePlayMode');
    this[playMode] = this.constructor.toArray(sanitized);
  }

  get playMode() {
    let value = this[playMode];
    return this.constructor.fromArray(value);
  }  set productionCompany(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[productionCompany] = this.constructor.toArray(sanitized);
  }

  get productionCompany() {
    let value = this[productionCompany];
    return this.constructor.fromArray(value);
  }  set quest(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[quest] = this.constructor.toArray(sanitized);
  }

  get quest() {
    let value = this[quest];
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

export default VideoGameSeries;
