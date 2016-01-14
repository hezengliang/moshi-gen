/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalTherapy from './MedicalTherapy';

const _debug = debug('moshi:classes:DrugClass');
const drug = Symbol.for('drug');


/**
 * A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.
 */
class DrugClass extends MedicalTherapy {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DrugClass';
  }

  set drug(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Drug');
    this[drug] = this.constructor.toArray(sanitized);
  }

  get drug() {
    let value = this[drug];
    return this.constructor.fromArray(value);
  }

}

export default DrugClass;
