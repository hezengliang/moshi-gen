/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Place from './Place';

const _debug = debug('moshi:classes:CivicStructure');
const openingHours = Symbol.for('openingHours');


/**
 * A public structure, such as a town hall or concert hall.
 */
class CivicStructure extends Place {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CivicStructure';
  }

  set openingHours(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[openingHours] = this.constructor.toArray(sanitized);
  }

  get openingHours() {
    let value = this[openingHours];
    return this.constructor.fromArray(value);
  }

}

export default CivicStructure;
