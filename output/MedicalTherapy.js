/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:MedicalTherapy');
const adverseOutcome = Symbol.for('adverseOutcome');
const contraindication = Symbol.for('contraindication');
const duplicateTherapy = Symbol.for('duplicateTherapy');
const indication = Symbol.for('indication');
const seriousAdverseOutcome = Symbol.for('seriousAdverseOutcome');


/**
 * Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition.
 */
class MedicalTherapy extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalTherapy';
  }

  set adverseOutcome(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalEntity');
    this[adverseOutcome] = this.constructor.toArray(sanitized);
  }

  get adverseOutcome() {
    let value = this[adverseOutcome];
    return this.constructor.fromArray(value);
  }  set contraindication(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalContraindication');
    this[contraindication] = this.constructor.toArray(sanitized);
  }

  get contraindication() {
    let value = this[contraindication];
    return this.constructor.fromArray(value);
  }  set duplicateTherapy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTherapy');
    this[duplicateTherapy] = this.constructor.toArray(sanitized);
  }

  get duplicateTherapy() {
    let value = this[duplicateTherapy];
    return this.constructor.fromArray(value);
  }  set indication(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalIndication');
    this[indication] = this.constructor.toArray(sanitized);
  }

  get indication() {
    let value = this[indication];
    return this.constructor.fromArray(value);
  }  set seriousAdverseOutcome(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalEntity');
    this[seriousAdverseOutcome] = this.constructor.toArray(sanitized);
  }

  get seriousAdverseOutcome() {
    let value = this[seriousAdverseOutcome];
    return this.constructor.fromArray(value);
  }

}

export default MedicalTherapy;
