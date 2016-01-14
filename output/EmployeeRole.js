/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import OrganizationRole from './OrganizationRole';

const _debug = debug('moshi:classes:EmployeeRole');
const baseSalary = Symbol.for('baseSalary');
const salaryCurrency = Symbol.for('salaryCurrency');


/**
 * A subclass of OrganizationRole used to describe employee relationships.
 */
class EmployeeRole extends OrganizationRole {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'EmployeeRole';
  }

  set baseSalary(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','PriceSpecification');
    this[baseSalary] = this.constructor.toArray(sanitized);
  }

  get baseSalary() {
    let value = this[baseSalary];
    return this.constructor.fromArray(value);
  }  set salaryCurrency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[salaryCurrency] = this.constructor.toArray(sanitized);
  }

  get salaryCurrency() {
    let value = this[salaryCurrency];
    return this.constructor.fromArray(value);
  }

}

export default EmployeeRole;
