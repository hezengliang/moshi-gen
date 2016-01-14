/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Role from './Role';

const _debug = debug('moshi:classes:OrganizationRole');
const numberedPosition = Symbol.for('numberedPosition');


/**
 * A subclass of Role used to describe roles within organizations.
 */
class OrganizationRole extends Role {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'OrganizationRole';
  }

  set numberedPosition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[numberedPosition] = this.constructor.toArray(sanitized);
  }

  get numberedPosition() {
    let value = this[numberedPosition];
    return this.constructor.fromArray(value);
  }

}

export default OrganizationRole;
