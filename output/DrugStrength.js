/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalIntangible from './MedicalIntangible';

const _debug = debug('moshi:classes:DrugStrength');
const activeIngredient = Symbol.for('activeIngredient');
const availableIn = Symbol.for('availableIn');
const strengthUnit = Symbol.for('strengthUnit');
const strengthValue = Symbol.for('strengthValue');


/**
 * A specific strength in which a medical drug is available in a specific country.
 */
class DrugStrength extends MedicalIntangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DrugStrength';
  }

  set activeIngredient(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[activeIngredient] = this.constructor.toArray(sanitized);
  }

  get activeIngredient() {
    let value = this[activeIngredient];
    return this.constructor.fromArray(value);
  }  set availableIn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AdministrativeArea');
    this[availableIn] = this.constructor.toArray(sanitized);
  }

  get availableIn() {
    let value = this[availableIn];
    return this.constructor.fromArray(value);
  }  set strengthUnit(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[strengthUnit] = this.constructor.toArray(sanitized);
  }

  get strengthUnit() {
    let value = this[strengthUnit];
    return this.constructor.fromArray(value);
  }  set strengthValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[strengthValue] = this.constructor.toArray(sanitized);
  }

  get strengthValue() {
    let value = this[strengthValue];
    return this.constructor.fromArray(value);
  }

}

export default DrugStrength;
