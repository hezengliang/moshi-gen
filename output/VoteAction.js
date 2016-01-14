/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ChooseAction from './ChooseAction';

const _debug = debug('moshi:classes:VoteAction');
const candidate = Symbol.for('candidate');


/**
 * The act of expressing a preference from a fixed/finite/structured set of choices/options.
 */
class VoteAction extends ChooseAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'VoteAction';
  }

  set candidate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[candidate] = this.constructor.toArray(sanitized);
  }

  get candidate() {
    let value = this[candidate];
    return this.constructor.fromArray(value);
  }

}

export default VoteAction;
