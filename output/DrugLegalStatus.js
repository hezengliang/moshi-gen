/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalIntangible from './MedicalIntangible';

const _debug = debug('moshi:classes:DrugLegalStatus');
const applicableLocation = Symbol.for('applicableLocation');


/**
 * The legal availability status of a medical drug.
 */
class DrugLegalStatus extends MedicalIntangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DrugLegalStatus';
  }

  set applicableLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AdministrativeArea');
    this[applicableLocation] = this.constructor.toArray(sanitized);
  }

  get applicableLocation() {
    let value = this[applicableLocation];
    return this.constructor.fromArray(value);
  }

}

export default DrugLegalStatus;
