/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import SoftwareApplication from './SoftwareApplication';

const _debug = debug('moshi:classes:MobileApplication');
const carrierRequirements = Symbol.for('carrierRequirements');


/**
 * A software application designed specifically to work well on a mobile device such as a telephone.
 */
class MobileApplication extends SoftwareApplication {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MobileApplication';
  }

  set carrierRequirements(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[carrierRequirements] = this.constructor.toArray(sanitized);
  }

  get carrierRequirements() {
    let value = this[carrierRequirements];
    return this.constructor.fromArray(value);
  }

}

export default MobileApplication;
