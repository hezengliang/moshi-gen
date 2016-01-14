/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:ProgramMembership');
const hostingOrganization = Symbol.for('hostingOrganization');
const member = Symbol.for('member');
const membershipNumber = Symbol.for('membershipNumber');
const programName = Symbol.for('programName');


/**
 * Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 */
class ProgramMembership extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ProgramMembership';
  }

  set hostingOrganization(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[hostingOrganization] = this.constructor.toArray(sanitized);
  }

  get hostingOrganization() {
    let value = this[hostingOrganization];
    return this.constructor.fromArray(value);
  }  set member(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[member] = this.constructor.toArray(sanitized);
  }

  get member() {
    let value = this[member];
    return this.constructor.fromArray(value);
  }  set membershipNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[membershipNumber] = this.constructor.toArray(sanitized);
  }

  get membershipNumber() {
    let value = this[membershipNumber];
    return this.constructor.fromArray(value);
  }  set programName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[programName] = this.constructor.toArray(sanitized);
  }

  get programName() {
    let value = this[programName];
    return this.constructor.fromArray(value);
  }

}

export default ProgramMembership;
