/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Game');
const characterAttribute = Symbol.for('characterAttribute');
const gameItem = Symbol.for('gameItem');
const gameLocation = Symbol.for('gameLocation');
const numberOfPlayers = Symbol.for('numberOfPlayers');
const quest = Symbol.for('quest');


/**
 * The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting. See also open issues list.
 */
class Game extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Game';
  }

  set characterAttribute(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[characterAttribute] = this.constructor.toArray(sanitized);
  }

  get characterAttribute() {
    let value = this[characterAttribute];
    return this.constructor.fromArray(value);
  }  set gameItem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[gameItem] = this.constructor.toArray(sanitized);
  }

  get gameItem() {
    let value = this[gameItem];
    return this.constructor.fromArray(value);
  }  set gameLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PostalAddress','URL','Place');
    this[gameLocation] = this.constructor.toArray(sanitized);
  }

  get gameLocation() {
    let value = this[gameLocation];
    return this.constructor.fromArray(value);
  }  set numberOfPlayers(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[numberOfPlayers] = this.constructor.toArray(sanitized);
  }

  get numberOfPlayers() {
    let value = this[numberOfPlayers];
    return this.constructor.fromArray(value);
  }  set quest(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[quest] = this.constructor.toArray(sanitized);
  }

  get quest() {
    let value = this[quest];
    return this.constructor.fromArray(value);
  }

}

export default Game;
