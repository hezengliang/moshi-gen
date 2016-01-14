/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalOrganization from './MedicalOrganization';

const _debug = debug('moshi:classes:DiagnosticLab');
const availableTest = Symbol.for('availableTest');


/**
 * A medical laboratory that offers on-site or off-site diagnostic services.
 */
class DiagnosticLab extends MedicalOrganization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DiagnosticLab';
  }

  set availableTest(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTest');
    this[availableTest] = this.constructor.toArray(sanitized);
  }

  get availableTest() {
    let value = this[availableTest];
    return this.constructor.fromArray(value);
  }

}

export default DiagnosticLab;
