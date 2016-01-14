/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:ExercisePlan');
const activityDuration = Symbol.for('activityDuration');
const activityFrequency = Symbol.for('activityFrequency');
const additionalVariable = Symbol.for('additionalVariable');
const exerciseType = Symbol.for('exerciseType');
const intensity = Symbol.for('intensity');
const repetitions = Symbol.for('repetitions');
const restPeriods = Symbol.for('restPeriods');
const workload = Symbol.for('workload');


/**
 * Fitness-related activity designed for a specific health-related purpose, including defined exercise routines as well as activity prescribed by a clinician.
 */
class ExercisePlan extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ExercisePlan';
  }

  set activityDuration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[activityDuration] = this.constructor.toArray(sanitized);
  }

  get activityDuration() {
    let value = this[activityDuration];
    return this.constructor.fromArray(value);
  }  set activityFrequency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[activityFrequency] = this.constructor.toArray(sanitized);
  }

  get activityFrequency() {
    let value = this[activityFrequency];
    return this.constructor.fromArray(value);
  }  set additionalVariable(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[additionalVariable] = this.constructor.toArray(sanitized);
  }

  get additionalVariable() {
    let value = this[additionalVariable];
    return this.constructor.fromArray(value);
  }  set exerciseType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[exerciseType] = this.constructor.toArray(sanitized);
  }

  get exerciseType() {
    let value = this[exerciseType];
    return this.constructor.fromArray(value);
  }  set intensity(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[intensity] = this.constructor.toArray(sanitized);
  }

  get intensity() {
    let value = this[intensity];
    return this.constructor.fromArray(value);
  }  set repetitions(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[repetitions] = this.constructor.toArray(sanitized);
  }

  get repetitions() {
    let value = this[repetitions];
    return this.constructor.fromArray(value);
  }  set restPeriods(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[restPeriods] = this.constructor.toArray(sanitized);
  }

  get restPeriods() {
    let value = this[restPeriods];
    return this.constructor.fromArray(value);
  }  set workload(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Energy');
    this[workload] = this.constructor.toArray(sanitized);
  }

  get workload() {
    let value = this[workload];
    return this.constructor.fromArray(value);
  }

}

export default ExercisePlan;
