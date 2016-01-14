/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import UpdateAction from './UpdateAction';

const _debug = debug('moshi:classes:ReplaceAction');
const replacee = Symbol.for('replacee');
const replacer = Symbol.for('replacer');


/**
 * The act of editing a recipient by replacing an old object with a new object.
 */
class ReplaceAction extends UpdateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ReplaceAction';
  }

  set replacee(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[replacee] = this.constructor.toArray(sanitized);
  }

  get replacee() {
    let value = this[replacee];
    return this.constructor.fromArray(value);
  }  set replacer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[replacer] = this.constructor.toArray(sanitized);
  }

  get replacer() {
    let value = this[replacer];
    return this.constructor.fromArray(value);
  }

}

export default ReplaceAction;
