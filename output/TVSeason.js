/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWorkSeason from './CreativeWorkSeason';

const _debug = debug('moshi:classes:TVSeason');
const countryOfOrigin = Symbol.for('countryOfOrigin');


/**
 * Season dedicated to TV broadcast and associated online delivery.
 */
class TVSeason extends CreativeWorkSeason {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TVSeason';
  }

  set countryOfOrigin(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Country');
    this[countryOfOrigin] = this.constructor.toArray(sanitized);
  }

  get countryOfOrigin() {
    let value = this[countryOfOrigin];
    return this.constructor.fromArray(value);
  }

}

export default TVSeason;
