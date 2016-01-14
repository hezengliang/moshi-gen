/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalGuideline from './MedicalGuideline';

const _debug = debug('moshi:classes:MedicalGuidelineRecommendation');
const recommendationStrength = Symbol.for('recommendationStrength');


/**
 * A guideline recommendation that is regarded as efficacious and where quality of the data supporting the recommendation is sound.
 */
class MedicalGuidelineRecommendation extends MedicalGuideline {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalGuidelineRecommendation';
  }

  set recommendationStrength(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[recommendationStrength] = this.constructor.toArray(sanitized);
  }

  get recommendationStrength() {
    let value = this[recommendationStrength];
    return this.constructor.fromArray(value);
  }

}

export default MedicalGuidelineRecommendation;
