/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalStudy from './MedicalStudy';

const _debug = debug('moshi:classes:MedicalTrial');
const phase = Symbol.for('phase');
const trialDesign = Symbol.for('trialDesign');


/**
 * A medical trial is a type of medical study that uses scientific process used to compare the safety and efficacy of medical therapies or medical procedures. In general, medical trials are controlled and subjects are allocated at random to the different treatment and/or control groups.
 */
class MedicalTrial extends MedicalStudy {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalTrial';
  }

  set phase(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[phase] = this.constructor.toArray(sanitized);
  }

  get phase() {
    let value = this[phase];
    return this.constructor.fromArray(value);
  }  set trialDesign(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTrialDesign');
    this[trialDesign] = this.constructor.toArray(sanitized);
  }

  get trialDesign() {
    let value = this[trialDesign];
    return this.constructor.fromArray(value);
  }

}

export default MedicalTrial;
