/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:MedicalRiskEstimator');
const estimatesRiskOf = Symbol.for('estimatesRiskOf');
const includedRiskFactor = Symbol.for('includedRiskFactor');


/**
 * Any rule set or interactive tool for estimating the risk of developing a complication or condition.
 */
class MedicalRiskEstimator extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalRiskEstimator';
  }

  set estimatesRiskOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalEntity');
    this[estimatesRiskOf] = this.constructor.toArray(sanitized);
  }

  get estimatesRiskOf() {
    let value = this[estimatesRiskOf];
    return this.constructor.fromArray(value);
  }  set includedRiskFactor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalRiskFactor');
    this[includedRiskFactor] = this.constructor.toArray(sanitized);
  }

  get includedRiskFactor() {
    let value = this[includedRiskFactor];
    return this.constructor.fromArray(value);
  }

}

export default MedicalRiskEstimator;
