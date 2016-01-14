/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalRiskEstimator from './MedicalRiskEstimator';

const _debug = debug('moshi:classes:MedicalRiskScore');
const algorithm = Symbol.for('algorithm');


/**
 * A simple system that adds up the number of risk factors to yield a score that is associated with prognosis, e.g. CHAD score, TIMI risk score.
 */
class MedicalRiskScore extends MedicalRiskEstimator {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalRiskScore';
  }

  set algorithm(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[algorithm] = this.constructor.toArray(sanitized);
  }

  get algorithm() {
    let value = this[algorithm];
    return this.constructor.fromArray(value);
  }

}

export default MedicalRiskScore;
