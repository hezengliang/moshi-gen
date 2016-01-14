/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalTest from './MedicalTest';

const _debug = debug('moshi:classes:PathologyTest');
const tissueSample = Symbol.for('tissueSample');


/**
 * A medical test performed by a laboratory that typically involves examination of a tissue sample by a pathologist.
 */
class PathologyTest extends MedicalTest {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PathologyTest';
  }

  set tissueSample(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[tissueSample] = this.constructor.toArray(sanitized);
  }

  get tissueSample() {
    let value = this[tissueSample];
    return this.constructor.fromArray(value);
  }

}

export default PathologyTest;
