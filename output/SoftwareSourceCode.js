/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:SoftwareSourceCode');
const codeRepository = Symbol.for('codeRepository');
const codeSampleType = Symbol.for('codeSampleType');
const programmingLanguage = Symbol.for('programmingLanguage');
const runtimePlatform = Symbol.for('runtimePlatform');
const targetProduct = Symbol.for('targetProduct');


/**
 * Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.
 */
class SoftwareSourceCode extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SoftwareSourceCode';
  }

  set codeRepository(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[codeRepository] = this.constructor.toArray(sanitized);
  }

  get codeRepository() {
    let value = this[codeRepository];
    return this.constructor.fromArray(value);
  }  set codeSampleType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[codeSampleType] = this.constructor.toArray(sanitized);
  }

  get codeSampleType() {
    let value = this[codeSampleType];
    return this.constructor.fromArray(value);
  }  set programmingLanguage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Language');
    this[programmingLanguage] = this.constructor.toArray(sanitized);
  }

  get programmingLanguage() {
    let value = this[programmingLanguage];
    return this.constructor.fromArray(value);
  }  set runtimePlatform(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[runtimePlatform] = this.constructor.toArray(sanitized);
  }

  get runtimePlatform() {
    let value = this[runtimePlatform];
    return this.constructor.fromArray(value);
  }  set targetProduct(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SoftwareApplication');
    this[targetProduct] = this.constructor.toArray(sanitized);
  }

  get targetProduct() {
    let value = this[targetProduct];
    return this.constructor.fromArray(value);
  }

}

export default SoftwareSourceCode;
