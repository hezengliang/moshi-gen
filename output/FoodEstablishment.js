/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import LocalBusiness from './LocalBusiness';

const _debug = debug('moshi:classes:FoodEstablishment');
const acceptsReservations = Symbol.for('acceptsReservations');
const menu = Symbol.for('menu');
const servesCuisine = Symbol.for('servesCuisine');


/**
 * A food-related business.
 */
class FoodEstablishment extends LocalBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'FoodEstablishment';
  }

  set acceptsReservations(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean','Text','URL');
    this[acceptsReservations] = this.constructor.toArray(sanitized);
  }

  get acceptsReservations() {
    let value = this[acceptsReservations];
    return this.constructor.fromArray(value);
  }  set menu(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','URL');
    this[menu] = this.constructor.toArray(sanitized);
  }

  get menu() {
    let value = this[menu];
    return this.constructor.fromArray(value);
  }  set servesCuisine(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[servesCuisine] = this.constructor.toArray(sanitized);
  }

  get servesCuisine() {
    let value = this[servesCuisine];
    return this.constructor.fromArray(value);
  }

}

export default FoodEstablishment;
