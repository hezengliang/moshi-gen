/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalStudy from './MedicalStudy';

const _debug = debug('moshi:classes:MedicalObservationalStudy');
const studyDesign = Symbol.for('studyDesign');


/**
 * An observational study is a type of medical study that attempts to infer the possible effect of a treatment through observation of a cohort of subjects over a period of time. In an observational study, the assignment of subjects into treatment groups versus control groups is outside the control of the investigator. This is in contrast with controlled studies, such as the randomized controlled trials represented by MedicalTrial, where each subject is randomly assigned to a treatment group or a control group before the start of the treatment.
 */
class MedicalObservationalStudy extends MedicalStudy {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalObservationalStudy';
  }

  set studyDesign(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalObservationalStudyDesign');
    this[studyDesign] = this.constructor.toArray(sanitized);
  }

  get studyDesign() {
    let value = this[studyDesign];
    return this.constructor.fromArray(value);
  }

}

export default MedicalObservationalStudy;
