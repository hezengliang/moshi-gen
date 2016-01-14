/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Audience from './Audience';

const _debug = debug('moshi:classes:EducationalAudience');
const educationalRole = Symbol.for('educationalRole');


/**
 * An EducationalAudience.
 */
class EducationalAudience extends Audience {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'EducationalAudience';
  }

  set educationalRole(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[educationalRole] = this.constructor.toArray(sanitized);
  }

  get educationalRole() {
    let value = this[educationalRole];
    return this.constructor.fromArray(value);
  }

}

export default EducationalAudience;
