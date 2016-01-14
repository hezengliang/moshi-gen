/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Property');
const domainIncludes = Symbol.for('domainIncludes');
const inverseOf = Symbol.for('inverseOf');
const rangeIncludes = Symbol.for('rangeIncludes');
const supersededBy = Symbol.for('supersededBy');


/**
 * A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.
 */
class Property extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Property';
  }

  set domainIncludes(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Class');
    this[domainIncludes] = this.constructor.toArray(sanitized);
  }

  get domainIncludes() {
    let value = this[domainIncludes];
    return this.constructor.fromArray(value);
  }  set inverseOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Property');
    this[inverseOf] = this.constructor.toArray(sanitized);
  }

  get inverseOf() {
    let value = this[inverseOf];
    return this.constructor.fromArray(value);
  }  set rangeIncludes(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Class');
    this[rangeIncludes] = this.constructor.toArray(sanitized);
  }

  get rangeIncludes() {
    let value = this[rangeIncludes];
    return this.constructor.fromArray(value);
  }  set supersededBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Class','Property','Enumeration');
    this[supersededBy] = this.constructor.toArray(sanitized);
  }

  get supersededBy() {
    let value = this[supersededBy];
    return this.constructor.fromArray(value);
  }

}

export default Property;
