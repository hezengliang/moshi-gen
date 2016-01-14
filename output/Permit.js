/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Permit');
const issuedBy = Symbol.for('issuedBy');
const issuedThrough = Symbol.for('issuedThrough');
const permitAudience = Symbol.for('permitAudience');
const validFor = Symbol.for('validFor');
const validFrom = Symbol.for('validFrom');
const validIn = Symbol.for('validIn');
const validUntil = Symbol.for('validUntil');


/**
 * A permit issued by an organization, e.g. a parking pass.
 */
class Permit extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Permit';
  }

  set issuedBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[issuedBy] = this.constructor.toArray(sanitized);
  }

  get issuedBy() {
    let value = this[issuedBy];
    return this.constructor.fromArray(value);
  }  set issuedThrough(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Service');
    this[issuedThrough] = this.constructor.toArray(sanitized);
  }

  get issuedThrough() {
    let value = this[issuedThrough];
    return this.constructor.fromArray(value);
  }  set permitAudience(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Audience');
    this[permitAudience] = this.constructor.toArray(sanitized);
  }

  get permitAudience() {
    let value = this[permitAudience];
    return this.constructor.fromArray(value);
  }  set validFor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[validFor] = this.constructor.toArray(sanitized);
  }

  get validFor() {
    let value = this[validFor];
    return this.constructor.fromArray(value);
  }  set validFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[validFrom] = this.constructor.toArray(sanitized);
  }

  get validFrom() {
    let value = this[validFrom];
    return this.constructor.fromArray(value);
  }  set validIn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AdministrativeArea');
    this[validIn] = this.constructor.toArray(sanitized);
  }

  get validIn() {
    let value = this[validIn];
    return this.constructor.fromArray(value);
  }  set validUntil(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[validUntil] = this.constructor.toArray(sanitized);
  }

  get validUntil() {
    let value = this[validUntil];
    return this.constructor.fromArray(value);
  }

}

export default Permit;
