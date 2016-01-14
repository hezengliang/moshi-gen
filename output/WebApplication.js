/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import SoftwareApplication from './SoftwareApplication';

const _debug = debug('moshi:classes:WebApplication');
const browserRequirements = Symbol.for('browserRequirements');


/**
 * Web applications.
 */
class WebApplication extends SoftwareApplication {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'WebApplication';
  }

  set browserRequirements(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[browserRequirements] = this.constructor.toArray(sanitized);
  }

  get browserRequirements() {
    let value = this[browserRequirements];
    return this.constructor.fromArray(value);
  }

}

export default WebApplication;
