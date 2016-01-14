/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AssessAction from './AssessAction';

const _debug = debug('moshi:classes:ChooseAction');
const actionOption = Symbol.for('actionOption');


/**
 * The act of expressing a preference from a set of options or a large or unbounded set of choices/options.
 */
class ChooseAction extends AssessAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ChooseAction';
  }

  set actionOption(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing','Text');
    this[actionOption] = this.constructor.toArray(sanitized);
  }

  get actionOption() {
    let value = this[actionOption];
    return this.constructor.fromArray(value);
  }

}

export default ChooseAction;
