/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:MedicalRiskFactor');
const increasesRiskOf = Symbol.for('increasesRiskOf');


/**
 * A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication.
 */
class MedicalRiskFactor extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalRiskFactor';
  }

  set increasesRiskOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalEntity');
    this[increasesRiskOf] = this.constructor.toArray(sanitized);
  }

  get increasesRiskOf() {
    let value = this[increasesRiskOf];
    return this.constructor.fromArray(value);
  }

}

export default MedicalRiskFactor;
