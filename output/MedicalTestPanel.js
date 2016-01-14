/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalTest from './MedicalTest';

const _debug = debug('moshi:classes:MedicalTestPanel');
const subTest = Symbol.for('subTest');


/**
 * Any collection of tests commonly ordered together.
 */
class MedicalTestPanel extends MedicalTest {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalTestPanel';
  }

  set subTest(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTest');
    this[subTest] = this.constructor.toArray(sanitized);
  }

  get subTest() {
    let value = this[subTest];
    return this.constructor.fromArray(value);
  }

}

export default MedicalTestPanel;
