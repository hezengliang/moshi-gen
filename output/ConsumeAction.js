/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Action from './Action';

const _debug = debug('moshi:classes:ConsumeAction');
const expectsAcceptanceOf = Symbol.for('expectsAcceptanceOf');


/**
 * The act of ingesting information/resources/food.
 */
class ConsumeAction extends Action {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ConsumeAction';
  }

  set expectsAcceptanceOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Offer');
    this[expectsAcceptanceOf] = this.constructor.toArray(sanitized);
  }

  get expectsAcceptanceOf() {
    let value = this[expectsAcceptanceOf];
    return this.constructor.fromArray(value);
  }

}

export default ConsumeAction;
