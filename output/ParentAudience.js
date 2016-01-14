/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PeopleAudience from './PeopleAudience';

const _debug = debug('moshi:classes:ParentAudience');
const childMaxAge = Symbol.for('childMaxAge');
const childMinAge = Symbol.for('childMinAge');


/**
 * A set of characteristics describing parents, who can be interested in viewing some content.
 */
class ParentAudience extends PeopleAudience {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ParentAudience';
  }

  set childMaxAge(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[childMaxAge] = this.constructor.toArray(sanitized);
  }

  get childMaxAge() {
    let value = this[childMaxAge];
    return this.constructor.fromArray(value);
  }  set childMinAge(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[childMinAge] = this.constructor.toArray(sanitized);
  }

  get childMinAge() {
    let value = this[childMinAge];
    return this.constructor.fromArray(value);
  }

}

export default ParentAudience;
