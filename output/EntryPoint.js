/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:EntryPoint');
const actionApplication = Symbol.for('actionApplication');
const actionPlatform = Symbol.for('actionPlatform');
const contentType = Symbol.for('contentType');
const encodingType = Symbol.for('encodingType');
const httpMethod = Symbol.for('httpMethod');
const urlTemplate = Symbol.for('urlTemplate');


/**
 * An entry point, within some Web-based protocol.
 */
class EntryPoint extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'EntryPoint';
  }

  set actionApplication(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SoftwareApplication');
    this[actionApplication] = this.constructor.toArray(sanitized);
  }

  get actionApplication() {
    let value = this[actionApplication];
    return this.constructor.fromArray(value);
  }  set actionPlatform(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[actionPlatform] = this.constructor.toArray(sanitized);
  }

  get actionPlatform() {
    let value = this[actionPlatform];
    return this.constructor.fromArray(value);
  }  set contentType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[contentType] = this.constructor.toArray(sanitized);
  }

  get contentType() {
    let value = this[contentType];
    return this.constructor.fromArray(value);
  }  set encodingType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[encodingType] = this.constructor.toArray(sanitized);
  }

  get encodingType() {
    let value = this[encodingType];
    return this.constructor.fromArray(value);
  }  set httpMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[httpMethod] = this.constructor.toArray(sanitized);
  }

  get httpMethod() {
    let value = this[httpMethod];
    return this.constructor.fromArray(value);
  }  set urlTemplate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[urlTemplate] = this.constructor.toArray(sanitized);
  }

  get urlTemplate() {
    let value = this[urlTemplate];
    return this.constructor.fromArray(value);
  }

}

export default EntryPoint;
