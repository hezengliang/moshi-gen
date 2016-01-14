/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TechArticle from './TechArticle';

const _debug = debug('moshi:classes:APIReference');
const assemblyVersion = Symbol.for('assemblyVersion');
const executableLibraryName = Symbol.for('executableLibraryName');
const programmingModel = Symbol.for('programmingModel');
const targetPlatform = Symbol.for('targetPlatform');


/**
 * Reference documentation for application programming interfaces (APIs).
 */
class APIReference extends TechArticle {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'APIReference';
  }

  set assemblyVersion(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[assemblyVersion] = this.constructor.toArray(sanitized);
  }

  get assemblyVersion() {
    let value = this[assemblyVersion];
    return this.constructor.fromArray(value);
  }  set executableLibraryName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[executableLibraryName] = this.constructor.toArray(sanitized);
  }

  get executableLibraryName() {
    let value = this[executableLibraryName];
    return this.constructor.fromArray(value);
  }  set programmingModel(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[programmingModel] = this.constructor.toArray(sanitized);
  }

  get programmingModel() {
    let value = this[programmingModel];
    return this.constructor.fromArray(value);
  }  set targetPlatform(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[targetPlatform] = this.constructor.toArray(sanitized);
  }

  get targetPlatform() {
    let value = this[targetPlatform];
    return this.constructor.fromArray(value);
  }

}

export default APIReference;
