/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PlayAction from './PlayAction';

const _debug = debug('moshi:classes:PerformAction');
const entertainmentBusiness = Symbol.for('entertainmentBusiness');


/**
 * The act of participating in performance arts.
 */
class PerformAction extends PlayAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PerformAction';
  }

  set entertainmentBusiness(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'EntertainmentBusiness');
    this[entertainmentBusiness] = this.constructor.toArray(sanitized);
  }

  get entertainmentBusiness() {
    let value = this[entertainmentBusiness];
    return this.constructor.fromArray(value);
  }

}

export default PerformAction;
