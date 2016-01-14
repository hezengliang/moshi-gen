/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalTherapy from './MedicalTherapy';

const _debug = debug('moshi:classes:DietarySupplement');
const activeIngredient = Symbol.for('activeIngredient');
const background = Symbol.for('background');
const dosageForm = Symbol.for('dosageForm');
const isProprietary = Symbol.for('isProprietary');
const legalStatus = Symbol.for('legalStatus');
const manufacturer = Symbol.for('manufacturer');
const maximumIntake = Symbol.for('maximumIntake');
const mechanismOfAction = Symbol.for('mechanismOfAction');
const nonProprietaryName = Symbol.for('nonProprietaryName');
const recommendedIntake = Symbol.for('recommendedIntake');
const safetyConsideration = Symbol.for('safetyConsideration');
const targetPopulation = Symbol.for('targetPopulation');


/**
 * A product taken by mouth that contains a dietary ingredient intended to supplement the diet. Dietary ingredients may include vitamins, minerals, herbs or other botanicals, amino acids, and substances such as enzymes, organ tissues, glandulars and metabolites.
 */
class DietarySupplement extends MedicalTherapy {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DietarySupplement';
  }

  set activeIngredient(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[activeIngredient] = this.constructor.toArray(sanitized);
  }

  get activeIngredient() {
    let value = this[activeIngredient];
    return this.constructor.fromArray(value);
  }  set background(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[background] = this.constructor.toArray(sanitized);
  }

  get background() {
    let value = this[background];
    return this.constructor.fromArray(value);
  }  set dosageForm(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[dosageForm] = this.constructor.toArray(sanitized);
  }

  get dosageForm() {
    let value = this[dosageForm];
    return this.constructor.fromArray(value);
  }  set isProprietary(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[isProprietary] = this.constructor.toArray(sanitized);
  }

  get isProprietary() {
    let value = this[isProprietary];
    return this.constructor.fromArray(value);
  }  set legalStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DrugLegalStatus');
    this[legalStatus] = this.constructor.toArray(sanitized);
  }

  get legalStatus() {
    let value = this[legalStatus];
    return this.constructor.fromArray(value);
  }  set manufacturer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[manufacturer] = this.constructor.toArray(sanitized);
  }

  get manufacturer() {
    let value = this[manufacturer];
    return this.constructor.fromArray(value);
  }  set maximumIntake(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MaximumDoseSchedule');
    this[maximumIntake] = this.constructor.toArray(sanitized);
  }

  get maximumIntake() {
    let value = this[maximumIntake];
    return this.constructor.fromArray(value);
  }  set mechanismOfAction(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[mechanismOfAction] = this.constructor.toArray(sanitized);
  }

  get mechanismOfAction() {
    let value = this[mechanismOfAction];
    return this.constructor.fromArray(value);
  }  set nonProprietaryName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[nonProprietaryName] = this.constructor.toArray(sanitized);
  }

  get nonProprietaryName() {
    let value = this[nonProprietaryName];
    return this.constructor.fromArray(value);
  }  set recommendedIntake(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'RecommendedDoseSchedule');
    this[recommendedIntake] = this.constructor.toArray(sanitized);
  }

  get recommendedIntake() {
    let value = this[recommendedIntake];
    return this.constructor.fromArray(value);
  }  set safetyConsideration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[safetyConsideration] = this.constructor.toArray(sanitized);
  }

  get safetyConsideration() {
    let value = this[safetyConsideration];
    return this.constructor.fromArray(value);
  }  set targetPopulation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[targetPopulation] = this.constructor.toArray(sanitized);
  }

  get targetPopulation() {
    let value = this[targetPopulation];
    return this.constructor.fromArray(value);
  }

}

export default DietarySupplement;
