/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Action from './Action';

const _debug = debug('moshi:classes:TransferAction');
const fromLocation = Symbol.for('fromLocation');
const toLocation = Symbol.for('toLocation');


/**
 * The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.
 */
class TransferAction extends Action {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TransferAction';
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

export default TransferAction;
