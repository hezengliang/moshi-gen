/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Action from './Action';

const _debug = debug('moshi:classes:UpdateAction');
const targetCollection = Symbol.for('targetCollection');


/**
 * The act of managing by changing/editing the state of the object.
 */
class UpdateAction extends Action {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'UpdateAction';
  }

  set targetCollection(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[targetCollection] = this.constructor.toArray(sanitized);
  }

  get targetCollection() {
    let value = this[targetCollection];
    return this.constructor.fromArray(value);
  }

}

export default UpdateAction;
