/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Game from './Game';

const _debug = debug('moshi:classes:VideoGame');
const actor = Symbol.for('actor');
const cheatCode = Symbol.for('cheatCode');
const director = Symbol.for('director');
const gamePlatform = Symbol.for('gamePlatform');
const gameServer = Symbol.for('gameServer');
const gameTip = Symbol.for('gameTip');
const musicBy = Symbol.for('musicBy');
const playMode = Symbol.for('playMode');
const trailer = Symbol.for('trailer');


/**
 * A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.
 */
class VideoGame extends Game {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'VideoGame';
  }

  set actor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[actor] = this.constructor.toArray(sanitized);
  }

  get actor() {
    let value = this[actor];
    return this.constructor.fromArray(value);
  }  set cheatCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[cheatCode] = this.constructor.toArray(sanitized);
  }

  get cheatCode() {
    let value = this[cheatCode];
    return this.constructor.fromArray(value);
  }  set director(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[director] = this.constructor.toArray(sanitized);
  }

  get director() {
    let value = this[director];
    return this.constructor.fromArray(value);
  }  set gamePlatform(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing','Text','URL');
    this[gamePlatform] = this.constructor.toArray(sanitized);
  }

  get gamePlatform() {
    let value = this[gamePlatform];
    return this.constructor.fromArray(value);
  }  set gameServer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'GameServer');
    this[gameServer] = this.constructor.toArray(sanitized);
  }

  get gameServer() {
    let value = this[gameServer];
    return this.constructor.fromArray(value);
  }  set gameTip(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[gameTip] = this.constructor.toArray(sanitized);
  }

  get gameTip() {
    let value = this[gameTip];
    return this.constructor.fromArray(value);
  }  set musicBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','MusicGroup');
    this[musicBy] = this.constructor.toArray(sanitized);
  }

  get musicBy() {
    let value = this[musicBy];
    return this.constructor.fromArray(value);
  }  set playMode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'GamePlayMode');
    this[playMode] = this.constructor.toArray(sanitized);
  }

  get playMode() {
    let value = this[playMode];
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

export default VideoGame;
