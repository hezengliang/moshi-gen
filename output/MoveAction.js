/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Action from './Action';

const _debug = debug('moshi:classes:MoveAction');
const fromLocation = Symbol.for('fromLocation');
const toLocation = Symbol.for('toLocation');


/**
 * The act of an agent relocating to a place.Related actions:TransferAction: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.
 */
class MoveAction extends Action {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MoveAction';
  }

  set fromLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[fromLocation] = this.constructor.toArray(sanitized);
  }

  get fromLocation() {
    let value = this[fromLocation];
    return this.constructor.fromArray(value);
  }  set toLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[toLocation] = this.constructor.toArray(sanitized);
  }

  get toLocation() {
    let value = this[toLocation];
    return this.constructor.fromArray(value);
  }

}

export default MoveAction;
