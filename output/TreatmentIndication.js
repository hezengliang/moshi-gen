/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalIndication from './MedicalIndication';

const _debug = debug('moshi:classes:TreatmentIndication');


/**
 * An indication for treating an underlying condition, symptom, etc.
 */
class TreatmentIndication extends MedicalIndication {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TreatmentIndication';
  }



}

export default TreatmentIndication;
