/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import EntertainmentBusiness from './EntertainmentBusiness';

const _debug = debug('moshi:classes:MovieTheater');
const screenCount = Symbol.for('screenCount');


/**
 * A movie theater.
 */
class MovieTheater extends EntertainmentBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MovieTheater';
  }

  set screenCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[screenCount] = this.constructor.toArray(sanitized);
  }

  get screenCount() {
    let value = this[screenCount];
    return this.constructor.fromArray(value);
  }

}

export default MovieTheater;
