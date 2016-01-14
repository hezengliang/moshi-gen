/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:NutritionInformation');
const calories = Symbol.for('calories');
const carbohydrateContent = Symbol.for('carbohydrateContent');
const cholesterolContent = Symbol.for('cholesterolContent');
const fatContent = Symbol.for('fatContent');
const fiberContent = Symbol.for('fiberContent');
const proteinContent = Symbol.for('proteinContent');
const saturatedFatContent = Symbol.for('saturatedFatContent');
const servingSize = Symbol.for('servingSize');
const sodiumContent = Symbol.for('sodiumContent');
const sugarContent = Symbol.for('sugarContent');
const transFatContent = Symbol.for('transFatContent');
const unsaturatedFatContent = Symbol.for('unsaturatedFatContent');


/**
 * Nutritional information about the recipe.
 */
class NutritionInformation extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'NutritionInformation';
  }

  set calories(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Energy');
    this[calories] = this.constructor.toArray(sanitized);
  }

  get calories() {
    let value = this[calories];
    return this.constructor.fromArray(value);
  }  set carbohydrateContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Mass');
    this[carbohydrateContent] = this.constructor.toArray(sanitized);
  }

  get carbohydrateContent() {
    let value = this[carbohydrateContent];
    return this.constructor.fromArray(value);
  }  set cholesterolContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Mass');
    this[cholesterolContent] = this.constructor.toArray(sanitized);
  }

  get cholesterolContent() {
    let value = this[cholesterolContent];
    return this.constructor.fromArray(value);
  }  set fatContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Mass');
    this[fatContent] = this.constructor.toArray(sanitized);
  }

  get fatContent() {
    let value = this[fatContent];
    return this.constructor.fromArray(value);
  }  set fiberContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Mass');
    this[fiberContent] = this.constructor.toArray(sanitized);
  }

  get fiberContent() {
    let value = this[fiberContent];
    return this.constructor.fromArray(value);
  }  set proteinContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Mass');
    this[proteinContent] = this.constructor.toArray(sanitized);
  }

  get proteinContent() {
    let value = this[proteinContent];
    return this.constructor.fromArray(value);
  }  set saturatedFatContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Mass');
    this[saturatedFatContent] = this.constructor.toArray(sanitized);
  }

  get saturatedFatContent() {
    let value = this[saturatedFatContent];
    return this.constructor.fromArray(value);
  }  set servingSize(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[servingSize] = this.constructor.toArray(sanitized);
  }

  get servingSize() {
    let value = this[servingSize];
    return this.constructor.fromArray(value);
  }  set sodiumContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Mass');
    this[sodiumContent] = this.constructor.toArray(sanitized);
  }

  get sodiumContent() {
    let value = this[sodiumContent];
    return this.constructor.fromArray(value);
  }  set sugarContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Mass');
    this[sugarContent] = this.constructor.toArray(sanitized);
  }

  get sugarContent() {
    let value = this[sugarContent];
    return this.constructor.fromArray(value);
  }  set transFatContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Mass');
    this[transFatContent] = this.constructor.toArray(sanitized);
  }

  get transFatContent() {
    let value = this[transFatContent];
    return this.constructor.fromArray(value);
  }  set unsaturatedFatContent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Mass');
    this[unsaturatedFatContent] = this.constructor.toArray(sanitized);
  }

  get unsaturatedFatContent() {
    let value = this[unsaturatedFatContent];
    return this.constructor.fromArray(value);
  }

}

export default NutritionInformation;
