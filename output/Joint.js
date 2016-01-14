/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AnatomicalStructure from './AnatomicalStructure';

const _debug = debug('moshi:classes:Joint');
const biomechnicalClass = Symbol.for('biomechnicalClass');
const functionalClass = Symbol.for('functionalClass');
const structuralClass = Symbol.for('structuralClass');


/**
 * The anatomical location at which two or more bones make contact.
 */
class Joint extends AnatomicalStructure {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Joint';
  }

  set biomechnicalClass(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[biomechnicalClass] = this.constructor.toArray(sanitized);
  }

  get biomechnicalClass() {
    let value = this[biomechnicalClass];
    return this.constructor.fromArray(value);
  }  set functionalClass(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[functionalClass] = this.constructor.toArray(sanitized);
  }

  get functionalClass() {
    let value = this[functionalClass];
    return this.constructor.fromArray(value);
  }  set structuralClass(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[structuralClass] = this.constructor.toArray(sanitized);
  }

  get structuralClass() {
    let value = this[structuralClass];
    return this.constructor.fromArray(value);
  }

}

export default Joint;
