/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Action from './Action';

const _debug = debug('moshi:classes:SearchAction');
const query = Symbol.for('query');


/**
 * The act of searching for an object.Related actions:FindAction: SearchAction generally leads to a FindAction, but not necessarily.
 */
class SearchAction extends Action {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SearchAction';
  }

  set query(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[query] = this.constructor.toArray(sanitized);
  }

  get query() {
    let value = this[query];
    return this.constructor.fromArray(value);
  }

}

export default SearchAction;
