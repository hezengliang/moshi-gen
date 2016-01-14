/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import OrganizeAction from './OrganizeAction';

const _debug = debug('moshi:classes:AllocateAction');
const purpose = Symbol.for('purpose');


/**
 * The act of organizing tasks/objects/events by associating resources to it.
 */
class AllocateAction extends OrganizeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AllocateAction';
  }

  set purpose(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalDevicePurpose','Thing');
    this[purpose] = this.constructor.toArray(sanitized);
  }

  get purpose() {
    let value = this[purpose];
    return this.constructor.fromArray(value);
  }

}

export default AllocateAction;
