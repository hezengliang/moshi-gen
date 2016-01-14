/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:MedicalGuideline');
const evidenceLevel = Symbol.for('evidenceLevel');
const evidenceOrigin = Symbol.for('evidenceOrigin');
const guidelineDate = Symbol.for('guidelineDate');
const guidelineSubject = Symbol.for('guidelineSubject');


/**
 * Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.
 */
class MedicalGuideline extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalGuideline';
  }

  set evidenceLevel(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalEvidenceLevel');
    this[evidenceLevel] = this.constructor.toArray(sanitized);
  }

  get evidenceLevel() {
    let value = this[evidenceLevel];
    return this.constructor.fromArray(value);
  }  set evidenceOrigin(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[evidenceOrigin] = this.constructor.toArray(sanitized);
  }

  get evidenceOrigin() {
    let value = this[evidenceOrigin];
    return this.constructor.fromArray(value);
  }  set guidelineDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[guidelineDate] = this.constructor.toArray(sanitized);
  }

  get guidelineDate() {
    let value = this[guidelineDate];
    return this.constructor.fromArray(value);
  }  set guidelineSubject(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalEntity');
    this[guidelineSubject] = this.constructor.toArray(sanitized);
  }

  get guidelineSubject() {
    let value = this[guidelineSubject];
    return this.constructor.fromArray(value);
  }

}

export default MedicalGuideline;
