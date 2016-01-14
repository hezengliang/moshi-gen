/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:GameServer');
const game = Symbol.for('game');
const playersOnline = Symbol.for('playersOnline');
const serverStatus = Symbol.for('serverStatus');


/**
 * Server that provides game interaction in a multiplayer game.
 */
class GameServer extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'GameServer';
  }

  set game(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'VideoGame');
    this[game] = this.constructor.toArray(sanitized);
  }

  get game() {
    let value = this[game];
    return this.constructor.fromArray(value);
  }  set playersOnline(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[playersOnline] = this.constructor.toArray(sanitized);
  }

  get playersOnline() {
    let value = this[playersOnline];
    return this.constructor.fromArray(value);
  }  set serverStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'GameServerStatus');
    this[serverStatus] = this.constructor.toArray(sanitized);
  }

  get serverStatus() {
    let value = this[serverStatus];
    return this.constructor.fromArray(value);
  }

}

export default GameServer;
