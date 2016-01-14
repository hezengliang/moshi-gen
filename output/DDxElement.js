/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalIntangible from './MedicalIntangible';

const _debug = debug('moshi:classes:DDxElement');
const diagnosis = Symbol.for('diagnosis');
const distinguishingSign = Symbol.for('distinguishingSign');


/**
 * An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.
 */
class DDxElement extends MedicalIntangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DDxElement';
  }

  set diagnosis(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalCondition');
    this[diagnosis] = this.constructor.toArray(sanitized);
  }

  get diagnosis() {
    let value = this[diagnosis];
    return this.constructor.fromArray(value);
  }  set distinguishingSign(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalSignOrSymptom');
    this[distinguishingSign] = this.constructor.toArray(sanitized);
  }

  get distinguishingSign() {
    let value = this[distinguishingSign];
    return this.constructor.fromArray(value);
  }

}

export default DDxElement;
