/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:OpeningHoursSpecification');
const closes = Symbol.for('closes');
const dayOfWeek = Symbol.for('dayOfWeek');
const opens = Symbol.for('opens');
const validFrom = Symbol.for('validFrom');
const validThrough = Symbol.for('validThrough');


/**
 * A structured value providing information about the opening hours of a place or a certain service inside a place.
 */
class OpeningHoursSpecification extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'OpeningHoursSpecification';
  }

  set closes(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Time');
    this[closes] = this.constructor.toArray(sanitized);
  }

  get closes() {
    let value = this[closes];
    return this.constructor.fromArray(value);
  }  set dayOfWeek(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DayOfWeek');
    this[dayOfWeek] = this.constructor.toArray(sanitized);
  }

  get dayOfWeek() {
    let value = this[dayOfWeek];
    return this.constructor.fromArray(value);
  }  set opens(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Time');
    this[opens] = this.constructor.toArray(sanitized);
  }

  get opens() {
    let value = this[opens];
    return this.constructor.fromArray(value);
  }  set validFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[validFrom] = this.constructor.toArray(sanitized);
  }

  get validFrom() {
    let value = this[validFrom];
    return this.constructor.fromArray(value);
  }  set validThrough(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[validThrough] = this.constructor.toArray(sanitized);
  }

  get validThrough() {
    let value = this[validThrough];
    return this.constructor.fromArray(value);
  }

}

export default OpeningHoursSpecification;
