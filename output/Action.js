/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Thing from './Thing';

const _debug = debug('moshi:classes:Action');
const actionStatus = Symbol.for('actionStatus');
const agent = Symbol.for('agent');
const endTime = Symbol.for('endTime');
const error = Symbol.for('error');
const instrument = Symbol.for('instrument');
const location = Symbol.for('location');
const object = Symbol.for('object');
const participant = Symbol.for('participant');
const result = Symbol.for('result');
const startTime = Symbol.for('startTime');
const target = Symbol.for('target');


/**
 * An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role. See also blog post and Actions overview document.
 */
class Action extends Thing {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Action';
  }

  set actionStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ActionStatusType');
    this[actionStatus] = this.constructor.toArray(sanitized);
  }

  get actionStatus() {
    let value = this[actionStatus];
    return this.constructor.fromArray(value);
  }  set agent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[agent] = this.constructor.toArray(sanitized);
  }

  get agent() {
    let value = this[agent];
    return this.constructor.fromArray(value);
  }  set endTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[endTime] = this.constructor.toArray(sanitized);
  }

  get endTime() {
    let value = this[endTime];
    return this.constructor.fromArray(value);
  }  set error(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[error] = this.constructor.toArray(sanitized);
  }

  get error() {
    let value = this[error];
    return this.constructor.fromArray(value);
  }  set instrument(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[instrument] = this.constructor.toArray(sanitized);
  }

  get instrument() {
    let value = this[instrument];
    return this.constructor.fromArray(value);
  }  set location(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place','Text','PostalAddress');
    this[location] = this.constructor.toArray(sanitized);
  }

  get location() {
    let value = this[location];
    return this.constructor.fromArray(value);
  }  set object(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[object] = this.constructor.toArray(sanitized);
  }

  get object() {
    let value = this[object];
    return this.constructor.fromArray(value);
  }  set participant(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[participant] = this.constructor.toArray(sanitized);
  }

  get participant() {
    let value = this[participant];
    return this.constructor.fromArray(value);
  }  set result(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[result] = this.constructor.toArray(sanitized);
  }

  get result() {
    let value = this[result];
    return this.constructor.fromArray(value);
  }  set startTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[startTime] = this.constructor.toArray(sanitized);
  }

  get startTime() {
    let value = this[startTime];
    return this.constructor.fromArray(value);
  }  set target(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'EntryPoint');
    this[target] = this.constructor.toArray(sanitized);
  }

  get target() {
    let value = this[target];
    return this.constructor.fromArray(value);
  }

}

export default Action;
