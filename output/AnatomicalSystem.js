/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:AnatomicalSystem');
const associatedPathophysiology = Symbol.for('associatedPathophysiology');
const comprisedOf = Symbol.for('comprisedOf');
const relatedCondition = Symbol.for('relatedCondition');
const relatedStructure = Symbol.for('relatedStructure');
const relatedTherapy = Symbol.for('relatedTherapy');


/**
 * An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can includes circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems.
 */
class AnatomicalSystem extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AnatomicalSystem';
  }

  set associatedPathophysiology(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[associatedPathophysiology] = this.constructor.toArray(sanitized);
  }

  get associatedPathophysiology() {
    let value = this[associatedPathophysiology];
    return this.constructor.fromArray(value);
  }  set comprisedOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalSystem','AnatomicalStructure');
    this[comprisedOf] = this.constructor.toArray(sanitized);
  }

  get comprisedOf() {
    let value = this[comprisedOf];
    return this.constructor.fromArray(value);
  }  set relatedCondition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalCondition');
    this[relatedCondition] = this.constructor.toArray(sanitized);
  }

  get relatedCondition() {
    let value = this[relatedCondition];
    return this.constructor.fromArray(value);
  }  set relatedStructure(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalStructure');
    this[relatedStructure] = this.constructor.toArray(sanitized);
  }

  get relatedStructure() {
    let value = this[relatedStructure];
    return this.constructor.fromArray(value);
  }  set relatedTherapy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTherapy');
    this[relatedTherapy] = this.constructor.toArray(sanitized);
  }

  get relatedTherapy() {
    let value = this[relatedTherapy];
    return this.constructor.fromArray(value);
  }

}

export default AnatomicalSystem;
