/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Role from './Role';

const _debug = debug('moshi:classes:PerformanceRole');
const characterName = Symbol.for('characterName');


/**
 * A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.
 */
class PerformanceRole extends Role {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PerformanceRole';
  }

  set characterName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[characterName] = this.constructor.toArray(sanitized);
  }

  get characterName() {
    let value = this[characterName];
    return this.constructor.fromArray(value);
  }

}

export default PerformanceRole;
