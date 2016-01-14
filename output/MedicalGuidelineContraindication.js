/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalGuideline from './MedicalGuideline';

const _debug = debug('moshi:classes:MedicalGuidelineContraindication');


/**
 * A guideline contraindication that designates a process as harmful and where quality of the data supporting the contraindication is sound.
 */
class MedicalGuidelineContraindication extends MedicalGuideline {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalGuidelineContraindication';
  }



}

export default MedicalGuidelineContraindication;
