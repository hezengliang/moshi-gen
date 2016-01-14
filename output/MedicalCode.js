/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalIntangible from './MedicalIntangible';

const _debug = debug('moshi:classes:MedicalCode');
const codeValue = Symbol.for('codeValue');
const codingSystem = Symbol.for('codingSystem');


/**
 * A code for a medical entity.
 */
class MedicalCode extends MedicalIntangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalCode';
  }

  set codeValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[codeValue] = this.constructor.toArray(sanitized);
  }

  get codeValue() {
    let value = this[codeValue];
    return this.constructor.fromArray(value);
  }  set codingSystem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[codingSystem] = this.constructor.toArray(sanitized);
  }

  get codingSystem() {
    let value = this[codingSystem];
    return this.constructor.fromArray(value);
  }

}

export default MedicalCode;
