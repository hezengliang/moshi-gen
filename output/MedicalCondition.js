/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEntity from './MedicalEntity';

const _debug = debug('moshi:classes:MedicalCondition');
const associatedAnatomy = Symbol.for('associatedAnatomy');
const cause = Symbol.for('cause');
const differentialDiagnosis = Symbol.for('differentialDiagnosis');
const epidemiology = Symbol.for('epidemiology');
const expectedPrognosis = Symbol.for('expectedPrognosis');
const naturalProgression = Symbol.for('naturalProgression');
const pathophysiology = Symbol.for('pathophysiology');
const possibleComplication = Symbol.for('possibleComplication');
const possibleTreatment = Symbol.for('possibleTreatment');
const primaryPrevention = Symbol.for('primaryPrevention');
const riskFactor = Symbol.for('riskFactor');
const secondaryPrevention = Symbol.for('secondaryPrevention');
const signOrSymptom = Symbol.for('signOrSymptom');
const stage = Symbol.for('stage');
const subtype = Symbol.for('subtype');
const typicalTest = Symbol.for('typicalTest');


/**
 * Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc.
 */
class MedicalCondition extends MedicalEntity {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalCondition';
  }

  set associatedAnatomy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalSystem','SuperficialAnatomy','AnatomicalStructure');
    this[associatedAnatomy] = this.constructor.toArray(sanitized);
  }

  get associatedAnatomy() {
    let value = this[associatedAnatomy];
    return this.constructor.fromArray(value);
  }  set cause(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalCause');
    this[cause] = this.constructor.toArray(sanitized);
  }

  get cause() {
    let value = this[cause];
    return this.constructor.fromArray(value);
  }  set differentialDiagnosis(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DDxElement');
    this[differentialDiagnosis] = this.constructor.toArray(sanitized);
  }

  get differentialDiagnosis() {
    let value = this[differentialDiagnosis];
    return this.constructor.fromArray(value);
  }  set epidemiology(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[epidemiology] = this.constructor.toArray(sanitized);
  }

  get epidemiology() {
    let value = this[epidemiology];
    return this.constructor.fromArray(value);
  }  set expectedPrognosis(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[expectedPrognosis] = this.constructor.toArray(sanitized);
  }

  get expectedPrognosis() {
    let value = this[expectedPrognosis];
    return this.constructor.fromArray(value);
  }  set naturalProgression(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[naturalProgression] = this.constructor.toArray(sanitized);
  }

  get naturalProgression() {
    let value = this[naturalProgression];
    return this.constructor.fromArray(value);
  }  set pathophysiology(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[pathophysiology] = this.constructor.toArray(sanitized);
  }

  get pathophysiology() {
    let value = this[pathophysiology];
    return this.constructor.fromArray(value);
  }  set possibleComplication(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[possibleComplication] = this.constructor.toArray(sanitized);
  }

  get possibleComplication() {
    let value = this[possibleComplication];
    return this.constructor.fromArray(value);
  }  set possibleTreatment(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTherapy');
    this[possibleTreatment] = this.constructor.toArray(sanitized);
  }

  get possibleTreatment() {
    let value = this[possibleTreatment];
    return this.constructor.fromArray(value);
  }  set primaryPrevention(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTherapy');
    this[primaryPrevention] = this.constructor.toArray(sanitized);
  }

  get primaryPrevention() {
    let value = this[primaryPrevention];
    return this.constructor.fromArray(value);
  }  set riskFactor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalRiskFactor');
    this[riskFactor] = this.constructor.toArray(sanitized);
  }

  get riskFactor() {
    let value = this[riskFactor];
    return this.constructor.fromArray(value);
  }  set secondaryPrevention(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTherapy');
    this[secondaryPrevention] = this.constructor.toArray(sanitized);
  }

  get secondaryPrevention() {
    let value = this[secondaryPrevention];
    return this.constructor.fromArray(value);
  }  set signOrSymptom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalSignOrSymptom');
    this[signOrSymptom] = this.constructor.toArray(sanitized);
  }

  get signOrSymptom() {
    let value = this[signOrSymptom];
    return this.constructor.fromArray(value);
  }  set stage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalConditionStage');
    this[stage] = this.constructor.toArray(sanitized);
  }

  get stage() {
    let value = this[stage];
    return this.constructor.fromArray(value);
  }  set subtype(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[subtype] = this.constructor.toArray(sanitized);
  }

  get subtype() {
    let value = this[subtype];
    return this.constructor.fromArray(value);
  }  set typicalTest(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalTest');
    this[typicalTest] = this.constructor.toArray(sanitized);
  }

  get typicalTest() {
    let value = this[typicalTest];
    return this.constructor.fromArray(value);
  }

}

export default MedicalCondition;
