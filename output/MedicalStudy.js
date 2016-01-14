/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:MedicalStudy');
const outcome = Symbol.for('outcome');
const population = Symbol.for('population');
const sponsor = Symbol.for('sponsor');
const status = Symbol.for('status');
const studyLocation = Symbol.for('studyLocation');
const studySubject = Symbol.for('studySubject');


/**
 * A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.
 */
class MedicalStudy extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalStudy';
  }

  set outcome(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[outcome] = this.constructor.toArray(sanitized);
  }

  get outcome() {
    let value = this[outcome];
    return this.constructor.fromArray(value);
  }  set population(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[population] = this.constructor.toArray(sanitized);
  }

  get population() {
    let value = this[population];
    return this.constructor.fromArray(value);
  }  set sponsor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[sponsor] = this.constructor.toArray(sanitized);
  }

  get sponsor() {
    let value = this[sponsor];
    return this.constructor.fromArray(value);
  }  set status(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalStudyStatus');
    this[status] = this.constructor.toArray(sanitized);
  }

  get status() {
    let value = this[status];
    return this.constructor.fromArray(value);
  }  set studyLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AdministrativeArea');
    this[studyLocation] = this.constructor.toArray(sanitized);
  }

  get studyLocation() {
    let value = this[studyLocation];
    return this.constructor.fromArray(value);
  }  set studySubject(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalEntity');
    this[studySubject] = this.constructor.toArray(sanitized);
  }

  get studySubject() {
    let value = this[studySubject];
    return this.constructor.fromArray(value);
  }

}

export default MedicalStudy;
