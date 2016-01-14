/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Organization from './Organization';

const _debug = debug('moshi:classes:Corporation');
const tickerSymbol = Symbol.for('tickerSymbol');


/**
 * Organization: A business corporation.
 */
class Corporation extends Organization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Corporation';
  }

  set tickerSymbol(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[tickerSymbol] = this.constructor.toArray(sanitized);
  }

  get tickerSymbol() {
    let value = this[tickerSymbol];
    return this.constructor.fromArray(value);
  }

}

export default Corporation;
