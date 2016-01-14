/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ReactAction from './ReactAction';

const _debug = debug('moshi:classes:EndorseAction');
const endorsee = Symbol.for('endorsee');


/**
 * An agent approves/certifies/likes/supports/sanction an object.
 */
class EndorseAction extends ReactAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'EndorseAction';
  }

  set endorsee(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[endorsee] = this.constructor.toArray(sanitized);
  }

  get endorsee() {
    let value = this[endorsee];
    return this.constructor.fromArray(value);
  }

}

export default EndorseAction;
