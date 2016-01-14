/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:AnatomicalStructure');
const associatedPathophysiology = Symbol.for('associatedPathophysiology');
const bodyLocation = Symbol.for('bodyLocation');
const connectedTo = Symbol.for('connectedTo');
const diagram = Symbol.for('diagram');
const function = Symbol.for('function');
const partOfSystem = Symbol.for('partOfSystem');
const relatedCondition = Symbol.for('relatedCondition');
const relatedTherapy = Symbol.for('relatedTherapy');
const subStructure = Symbol.for('subStructure');


/**
 * Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.
 */
class AnatomicalStructure extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AnatomicalStructure';
  }

  set associatedPathophysiology(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[associatedPathophysiology] = this.constructor.toArray(sanitized);
  }

  get associatedPathophysiology() {
    let value = this[associatedPathophysiology];
    return this.constructor.fromArray(value);
  }  set bodyLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[bodyLocation] = this.constructor.toArray(sanitized);
  }

  get bodyLocation() {
    let value = this[bodyLocation];
    return this.constructor.fromArray(value);
  }  set connectedTo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalStructure');
    this[connectedTo] = this.constructor.toArray(sanitized);
  }

  get connectedTo() {
    let value = this[connectedTo];
    return this.constructor.fromArray(value);
  }  set diagram(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ImageObject');
    this[diagram] = this.constructor.toArray(sanitized);
  }

  get diagram() {
    let value = this[diagram];
    return this.constructor.fromArray(value);
  }  set function(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[function] = this.constructor.toArray(sanitized);
  }

  get function() {
    let value = this[function];
    return this.constructor.fromArray(value);
  }  set partOfSystem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalSystem');
    this[partOfSystem] = this.constructor.toArray(sanitized);
  }

  get partOfSystem() {
    let value = this[partOfSystem];
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
  }  set subStructure(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalStructure');
    this[subStructure] = this.constructor.toArray(sanitized);
  }

  get subStructure() {
    let value = this[subStructure];
    return this.constructor.fromArray(value);
  }

}

export default AnatomicalStructure;
