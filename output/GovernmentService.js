/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Service from './Service';

const _debug = debug('moshi:classes:GovernmentService');
const serviceOperator = Symbol.for('serviceOperator');


/**
 * A service provided by a government organization, e.g. food stamps, veterans benefits, etc.
 */
class GovernmentService extends Service {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'GovernmentService';
  }

  set serviceOperator(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[serviceOperator] = this.constructor.toArray(sanitized);
  }

  get serviceOperator() {
    let value = this[serviceOperator];
    return this.constructor.fromArray(value);
  }

}

export default GovernmentService;
