/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MoveAction from './MoveAction';

const _debug = debug('moshi:classes:TravelAction');
const distance = Symbol.for('distance');


/**
 * The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.
 */
class TravelAction extends MoveAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TravelAction';
  }

  set distance(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Distance');
    this[distance] = this.constructor.toArray(sanitized);
  }

  get distance() {
    let value = this[distance];
    return this.constructor.fromArray(value);
  }

}

export default TravelAction;
