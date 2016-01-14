/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalSignOrSymptom from './MedicalSignOrSymptom';

const _debug = debug('moshi:classes:MedicalSymptom');


/**
 * Any indication of the existence of a medical condition or disease that is apparent to the patient.
 */
class MedicalSymptom extends MedicalSignOrSymptom {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalSymptom';
  }



}

export default MedicalSymptom;
