/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Role');
const endDate = Symbol.for('endDate');
const roleName = Symbol.for('roleName');
const startDate = Symbol.for('startDate');


/**
 * Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'. See also blog post.
 */
class Role extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Role';
  }

  set endDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[endDate] = this.constructor.toArray(sanitized);
  }

  get endDate() {
    let value = this[endDate];
    return this.constructor.fromArray(value);
  }  set roleName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[roleName] = this.constructor.toArray(sanitized);
  }

  get roleName() {
    let value = this[roleName];
    return this.constructor.fromArray(value);
  }  set startDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[startDate] = this.constructor.toArray(sanitized);
  }

  get startDate() {
    let value = this[startDate];
    return this.constructor.fromArray(value);
  }

}

export default Role;
