/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalIntangible from './MedicalIntangible';

const _debug = debug('moshi:classes:DrugCost');
const applicableLocation = Symbol.for('applicableLocation');
const costCategory = Symbol.for('costCategory');
const costCurrency = Symbol.for('costCurrency');
const costOrigin = Symbol.for('costOrigin');
const costPerUnit = Symbol.for('costPerUnit');
const drugUnit = Symbol.for('drugUnit');


/**
 * The cost per unit of a medical drug. Note that this type is not meant to represent the price in an offer of a drug for sale; see the Offer type for that. This type will typically be used to tag wholesale or average retail cost of a drug, or maximum reimbursable cost. Costs of medical drugs vary widely depending on how and where they are paid for, so while this type captures some of the variables, costs should be used with caution by consumers of this schema's markup.
 */
class DrugCost extends MedicalIntangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DrugCost';
  }

  set applicableLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AdministrativeArea');
    this[applicableLocation] = this.constructor.toArray(sanitized);
  }

  get applicableLocation() {
    let value = this[applicableLocation];
    return this.constructor.fromArray(value);
  }  set costCategory(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DrugCostCategory');
    this[costCategory] = this.constructor.toArray(sanitized);
  }

  get costCategory() {
    let value = this[costCategory];
    return this.constructor.fromArray(value);
  }  set costCurrency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[costCurrency] = this.constructor.toArray(sanitized);
  }

  get costCurrency() {
    let value = this[costCurrency];
    return this.constructor.fromArray(value);
  }  set costOrigin(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[costOrigin] = this.constructor.toArray(sanitized);
  }

  get costOrigin() {
    let value = this[costOrigin];
    return this.constructor.fromArray(value);
  }  set costPerUnit(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[costPerUnit] = this.constructor.toArray(sanitized);
  }

  get costPerUnit() {
    let value = this[costPerUnit];
    return this.constructor.fromArray(value);
  }  set drugUnit(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[drugUnit] = this.constructor.toArray(sanitized);
  }

  get drugUnit() {
    let value = this[drugUnit];
    return this.constructor.fromArray(value);
  }

}

export default DrugCost;
