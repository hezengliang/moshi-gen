/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalRiskEstimator from './MedicalRiskEstimator';

const _debug = debug('moshi:classes:MedicalRiskCalculator');


/**
 * A complex mathematical calculation requiring an online calculator, used to assess prognosis. Note: use the url property of Thing to record any URLs for online calculators.
 */
class MedicalRiskCalculator extends MedicalRiskEstimator {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalRiskCalculator';
  }



}

export default MedicalRiskCalculator;
