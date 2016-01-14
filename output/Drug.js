/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalTherapy from './MedicalTherapy';

const _debug = debug('moshi:classes:Drug');
const activeIngredient = Symbol.for('activeIngredient');
const administrationRoute = Symbol.for('administrationRoute');
const alcoholWarning = Symbol.for('alcoholWarning');
const availableStrength = Symbol.for('availableStrength');
const breastfeedingWarning = Symbol.for('breastfeedingWarning');
const clinicalPharmacology = Symbol.for('clinicalPharmacology');
const cost = Symbol.for('cost');
const dosageForm = Symbol.for('dosageForm');
const doseSchedule = Symbol.for('doseSchedule');
const drugClass = Symbol.for('drugClass');
const foodWarning = Symbol.for('foodWarning');
const interactingDrug = Symbol.for('interactingDrug');
const isAvailableGenerically = Symbol.for('isAvailableGenerically');
const isProprietary = Symbol.for('isProprietary');
const labelDetails = Symbol.for('labelDetails');
const legalStatus = Symbol.for('legalStatus');
const manufacturer = Symbol.for('manufacturer');
const mechanismOfAction = Symbol.for('mechanismOfAction');
const nonProprietaryName = Symbol.for('nonProprietaryName');
const overdosage = Symbol.for('overdosage');
const pregnancyCategory = Symbol.for('pregnancyCategory');
const pregnancyWarning = Symbol.for('pregnancyWarning');
const prescribingInfo = Symbol.for('prescribingInfo');
const prescriptionStatus = Symbol.for('prescriptionStatus');
const relatedDrug = Symbol.for('relatedDrug');
const warning = Symbol.for('warning');


/**
 * A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism.
 */
class Drug extends MedicalTherapy {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Drug';
  }

  set activeIngredient(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[activeIngredient] = this.constructor.toArray(sanitized);
  }

  get activeIngredient() {
    let value = this[activeIngredient];
    return this.constructor.fromArray(value);
  }  set administrationRoute(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[administrationRoute] = this.constructor.toArray(sanitized);
  }

  get administrationRoute() {
    let value = this[administrationRoute];
    return this.constructor.fromArray(value);
  }  set alcoholWarning(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[alcoholWarning] = this.constructor.toArray(sanitized);
  }

  get alcoholWarning() {
    let value = this[alcoholWarning];
    return this.constructor.fromArray(value);
  }  set availableStrength(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DrugStrength');
    this[availableStrength] = this.constructor.toArray(sanitized);
  }

  get availableStrength() {
    let value = this[availableStrength];
    return this.constructor.fromArray(value);
  }  set breastfeedingWarning(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[breastfeedingWarning] = this.constructor.toArray(sanitized);
  }

  get breastfeedingWarning() {
    let value = this[breastfeedingWarning];
    return this.constructor.fromArray(value);
  }  set clinicalPharmacology(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[clinicalPharmacology] = this.constructor.toArray(sanitized);
  }

  get clinicalPharmacology() {
    let value = this[clinicalPharmacology];
    return this.constructor.fromArray(value);
  }  set cost(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DrugCost');
    this[cost] = this.constructor.toArray(sanitized);
  }

  get cost() {
    let value = this[cost];
    return this.constructor.fromArray(value);
  }  set dosageForm(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[dosageForm] = this.constructor.toArray(sanitized);
  }

  get dosageForm() {
    let value = this[dosageForm];
    return this.constructor.fromArray(value);
  }  set doseSchedule(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DoseSchedule');
    this[doseSchedule] = this.constructor.toArray(sanitized);
  }

  get doseSchedule() {
    let value = this[doseSchedule];
    return this.constructor.fromArray(value);
  }  set drugClass(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DrugClass');
    this[drugClass] = this.constructor.toArray(sanitized);
  }

  get drugClass() {
    let value = this[drugClass];
    return this.constructor.fromArray(value);
  }  set foodWarning(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[foodWarning] = this.constructor.toArray(sanitized);
  }

  get foodWarning() {
    let value = this[foodWarning];
    return this.constructor.fromArray(value);
  }  set interactingDrug(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Drug');
    this[interactingDrug] = this.constructor.toArray(sanitized);
  }

  get interactingDrug() {
    let value = this[interactingDrug];
    return this.constructor.fromArray(value);
  }  set isAvailableGenerically(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[isAvailableGenerically] = this.constructor.toArray(sanitized);
  }

  get isAvailableGenerically() {
    let value = this[isAvailableGenerically];
    return this.constructor.fromArray(value);
  }  set isProprietary(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[isProprietary] = this.constructor.toArray(sanitized);
  }

  get isProprietary() {
    let value = this[isProprietary];
    return this.constructor.fromArray(value);
  }  set labelDetails(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[labelDetails] = this.constructor.toArray(sanitized);
  }

  get labelDetails() {
    let value = this[labelDetails];
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
  }  set overdosage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[overdosage] = this.constructor.toArray(sanitized);
  }

  get overdosage() {
    let value = this[overdosage];
    return this.constructor.fromArray(value);
  }  set pregnancyCategory(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DrugPregnancyCategory');
    this[pregnancyCategory] = this.constructor.toArray(sanitized);
  }

  get pregnancyCategory() {
    let value = this[pregnancyCategory];
    return this.constructor.fromArray(value);
  }  set pregnancyWarning(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[pregnancyWarning] = this.constructor.toArray(sanitized);
  }

  get pregnancyWarning() {
    let value = this[pregnancyWarning];
    return this.constructor.fromArray(value);
  }  set prescribingInfo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[prescribingInfo] = this.constructor.toArray(sanitized);
  }

  get prescribingInfo() {
    let value = this[prescribingInfo];
    return this.constructor.fromArray(value);
  }  set prescriptionStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DrugPrescriptionStatus');
    this[prescriptionStatus] = this.constructor.toArray(sanitized);
  }

  get prescriptionStatus() {
    let value = this[prescriptionStatus];
    return this.constructor.fromArray(value);
  }  set relatedDrug(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Drug');
    this[relatedDrug] = this.constructor.toArray(sanitized);
  }

  get relatedDrug() {
    let value = this[relatedDrug];
    return this.constructor.fromArray(value);
  }  set warning(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[warning] = this.constructor.toArray(sanitized);
  }

  get warning() {
    let value = this[warning];
    return this.constructor.fromArray(value);
  }

}

export default Drug;
