/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:SuperficialAnatomy');
const associatedPathophysiology = Symbol.for('associatedPathophysiology');
const relatedAnatomy = Symbol.for('relatedAnatomy');
const relatedCondition = Symbol.for('relatedCondition');
const relatedTherapy = Symbol.for('relatedTherapy');
const significance = Symbol.for('significance');


/**
 * Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures. Superficial anatomy plays an important role in sports medicine, phlebotomy, and other medical specialties as underlying anatomical structures can be identified through surface palpation. For example, during back surgery, superficial anatomy can be used to palpate and count vertebrae to find the site of incision. Or in phlebotomy, superficial anatomy can be used to locate an underlying vein; for example, the median cubital vein can be located by palpating the borders of the cubital fossa (such as the epicondyles of the humerus) and then looking for the superficial signs of the vein, such as size, prominence, ability to refill after depression, and feel of surrounding tissue support. As another example, in a subluxation (dislocation) of the glenohumeral joint, the bony structure becomes pronounced with the deltoid muscle failing to cover the glenohumeral joint allowing the edges of the scapula to be superficially visible. Here, the superficial anatomy is the visible edges of the scapula, implying the underlying dislocation of the joint (the related anatomical structure).
 */
class SuperficialAnatomy extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SuperficialAnatomy';
  }

  set associatedPathophysiology(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[associatedPathophysiology] = this.constructor.toArray(sanitized);
  }

  get associatedPathophysiology() {
    let value = this[associatedPathophysiology];
    return this.constructor.fromArray(value);
  }  set relatedAnatomy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalSystem','AnatomicalStructure');
    this[relatedAnatomy] = this.constructor.toArray(sanitized);
  }

  get relatedAnatomy() {
    let value = this[relatedAnatomy];
    return this.constructor.fromArray(value);
  }  set relatedCondition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalCondition');
    this[relatedCondition] = this.constructor.toArray(sanitized);
  }

  get relatedCondition() {
    let value = this[relatedCondition];
    return this.constructor.fromArray(value);
  }  set relatedTherapy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTherapy');
    this[relatedTherapy] = this.constructor.toArray(sanitized);
  }

  get relatedTherapy() {
    let value = this[relatedTherapy];
    return this.constructor.fromArray(value);
  }  set significance(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[significance] = this.constructor.toArray(sanitized);
  }

  get significance() {
    let value = this[significance];
    return this.constructor.fromArray(value);
  }

}

export default SuperficialAnatomy;
