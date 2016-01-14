/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEnumeration from './MedicalEnumeration';

const _debug = debug('moshi:classes:MedicalObservationalStudyDesign');


/**
 * Design models for observational medical studies. Enumerated type.
 */
class MedicalObservationalStudyDesign extends MedicalEnumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalObservationalStudyDesign';
  }



}

export default MedicalObservationalStudyDesign;
