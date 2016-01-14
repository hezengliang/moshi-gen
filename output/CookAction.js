/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreateAction from './CreateAction';

const _debug = debug('moshi:classes:CookAction');
const foodEstablishment = Symbol.for('foodEstablishment');
const foodEvent = Symbol.for('foodEvent');
const recipe = Symbol.for('recipe');


/**
 * The act of producing/preparing food.
 */
class CookAction extends CreateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CookAction';
  }

  set foodEstablishment(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'FoodEstablishment','Place');
    this[foodEstablishment] = this.constructor.toArray(sanitized);
  }

  get foodEstablishment() {
    let value = this[foodEstablishment];
    return this.constructor.fromArray(value);
  }  set foodEvent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'FoodEvent');
    this[foodEvent] = this.constructor.toArray(sanitized);
  }

  get foodEvent() {
    let value = this[foodEvent];
    return this.constructor.fromArray(value);
  }  set recipe(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Recipe');
    this[recipe] = this.constructor.toArray(sanitized);
  }

  get recipe() {
    let value = this[recipe];
    return this.constructor.fromArray(value);
  }

}

export default CookAction;
