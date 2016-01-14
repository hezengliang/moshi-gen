/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AddAction from './AddAction';

const _debug = debug('moshi:classes:InsertAction');
const toLocation = Symbol.for('toLocation');


/**
 * The act of adding at a specific location in an ordered collection.
 */
class InsertAction extends AddAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'InsertAction';
  }

  set toLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[toLocation] = this.constructor.toArray(sanitized);
  }

  get toLocation() {
    let value = this[toLocation];
    return this.constructor.fromArray(value);
  }

}

export default InsertAction;
