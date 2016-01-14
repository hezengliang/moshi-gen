/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AchieveAction from './AchieveAction';

const _debug = debug('moshi:classes:LoseAction');
const winner = Symbol.for('winner');


/**
 * The act of being defeated in a competitive activity.
 */
class LoseAction extends AchieveAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'LoseAction';
  }

  set winner(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[winner] = this.constructor.toArray(sanitized);
  }

  get winner() {
    let value = this[winner];
    return this.constructor.fromArray(value);
  }

}

export default LoseAction;
