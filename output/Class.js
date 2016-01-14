/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Class');
const supersededBy = Symbol.for('supersededBy');


/**
 * A class, also often called a 'Type'; equivalent to rdfs:Class.
 */
class Class extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Class';
  }

  set supersededBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Property','Enumeration','Class');
    this[supersededBy] = this.constructor.toArray(sanitized);
  }

  get supersededBy() {
    let value = this[supersededBy];
    return this.constructor.fromArray(value);
  }

}

export default Class;
