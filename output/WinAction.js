/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AchieveAction from './AchieveAction';

const _debug = debug('moshi:classes:WinAction');
const loser = Symbol.for('loser');


/**
 * The act of achieving victory in a competitive activity.
 */
class WinAction extends AchieveAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'WinAction';
  }

  set loser(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[loser] = this.constructor.toArray(sanitized);
  }

  get loser() {
    let value = this[loser];
    return this.constructor.fromArray(value);
  }

}

export default WinAction;
