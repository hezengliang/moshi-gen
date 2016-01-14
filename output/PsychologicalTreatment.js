/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalTherapy from './MedicalTherapy';

const _debug = debug('moshi:classes:PsychologicalTreatment');


/**
 * A process of care relying upon counseling, dialogue, communication, verbalization aimed at improving a mental health condition.
 */
class PsychologicalTreatment extends MedicalTherapy {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PsychologicalTreatment';
  }



}

export default PsychologicalTreatment;
