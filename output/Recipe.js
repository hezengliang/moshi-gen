/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Recipe');
const cookTime = Symbol.for('cookTime');
const cookingMethod = Symbol.for('cookingMethod');
const nutrition = Symbol.for('nutrition');
const prepTime = Symbol.for('prepTime');
const recipeCategory = Symbol.for('recipeCategory');
const recipeCuisine = Symbol.for('recipeCuisine');
const recipeIngredient = Symbol.for('recipeIngredient');
const recipeInstructions = Symbol.for('recipeInstructions');
const recipeYield = Symbol.for('recipeYield');
const totalTime = Symbol.for('totalTime');


/**
 * A recipe.
 */
class Recipe extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Recipe';
  }

  set cookTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[cookTime] = this.constructor.toArray(sanitized);
  }

  get cookTime() {
    let value = this[cookTime];
    return this.constructor.fromArray(value);
  }  set cookingMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[cookingMethod] = this.constructor.toArray(sanitized);
  }

  get cookingMethod() {
    let value = this[cookingMethod];
    return this.constructor.fromArray(value);
  }  set nutrition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'NutritionInformation');
    this[nutrition] = this.constructor.toArray(sanitized);
  }

  get nutrition() {
    let value = this[nutrition];
    return this.constructor.fromArray(value);
  }  set prepTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[prepTime] = this.constructor.toArray(sanitized);
  }

  get prepTime() {
    let value = this[prepTime];
    return this.constructor.fromArray(value);
  }  set recipeCategory(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[recipeCategory] = this.constructor.toArray(sanitized);
  }

  get recipeCategory() {
    let value = this[recipeCategory];
    return this.constructor.fromArray(value);
  }  set recipeCuisine(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[recipeCuisine] = this.constructor.toArray(sanitized);
  }

  get recipeCuisine() {
    let value = this[recipeCuisine];
    return this.constructor.fromArray(value);
  }  set recipeIngredient(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[recipeIngredient] = this.constructor.toArray(sanitized);
  }

  get recipeIngredient() {
    let value = this[recipeIngredient];
    return this.constructor.fromArray(value);
  }  set recipeInstructions(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ItemList','Text');
    this[recipeInstructions] = this.constructor.toArray(sanitized);
  }

  get recipeInstructions() {
    let value = this[recipeInstructions];
    return this.constructor.fromArray(value);
  }  set recipeYield(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[recipeYield] = this.constructor.toArray(sanitized);
  }

  get recipeYield() {
    let value = this[recipeYield];
    return this.constructor.fromArray(value);
  }  set totalTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[totalTime] = this.constructor.toArray(sanitized);
  }

  get totalTime() {
    let value = this[totalTime];
    return this.constructor.fromArray(value);
  }

}

export default Recipe;
