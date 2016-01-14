/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Audience from './Audience';

const _debug = debug('moshi:classes:PeopleAudience');
const healthCondition = Symbol.for('healthCondition');
const requiredGender = Symbol.for('requiredGender');
const requiredMaxAge = Symbol.for('requiredMaxAge');
const requiredMinAge = Symbol.for('requiredMinAge');
const suggestedGender = Symbol.for('suggestedGender');
const suggestedMaxAge = Symbol.for('suggestedMaxAge');
const suggestedMinAge = Symbol.for('suggestedMinAge');


/**
 * A set of characteristics belonging to people, e.g. who compose an item's target audience.
 */
class PeopleAudience extends Audience {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PeopleAudience';
  }

  set healthCondition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalCondition');
    this[healthCondition] = this.constructor.toArray(sanitized);
  }

  get healthCondition() {
    let value = this[healthCondition];
    return this.constructor.fromArray(value);
  }  set requiredGender(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[requiredGender] = this.constructor.toArray(sanitized);
  }

  get requiredGender() {
    let value = this[requiredGender];
    return this.constructor.fromArray(value);
  }  set requiredMaxAge(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[requiredMaxAge] = this.constructor.toArray(sanitized);
  }

  get requiredMaxAge() {
    let value = this[requiredMaxAge];
    return this.constructor.fromArray(value);
  }  set requiredMinAge(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[requiredMinAge] = this.constructor.toArray(sanitized);
  }

  get requiredMinAge() {
    let value = this[requiredMinAge];
    return this.constructor.fromArray(value);
  }  set suggestedGender(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[suggestedGender] = this.constructor.toArray(sanitized);
  }

  get suggestedGender() {
    let value = this[suggestedGender];
    return this.constructor.fromArray(value);
  }  set suggestedMaxAge(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[suggestedMaxAge] = this.constructor.toArray(sanitized);
  }

  get suggestedMaxAge() {
    let value = this[suggestedMaxAge];
    return this.constructor.fromArray(value);
  }  set suggestedMinAge(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[suggestedMinAge] = this.constructor.toArray(sanitized);
  }

  get suggestedMinAge() {
    let value = this[suggestedMinAge];
    return this.constructor.fromArray(value);
  }

}

export default PeopleAudience;
