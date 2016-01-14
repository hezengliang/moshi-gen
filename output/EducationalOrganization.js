/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Organization from './Organization';

const _debug = debug('moshi:classes:EducationalOrganization');
const alumni = Symbol.for('alumni');


/**
 * An educational organization.
 */
class EducationalOrganization extends Organization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'EducationalOrganization';
  }

  set alumni(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[alumni] = this.constructor.toArray(sanitized);
  }

  get alumni() {
    let value = this[alumni];
    return this.constructor.fromArray(value);
  }

}

export default EducationalOrganization;
