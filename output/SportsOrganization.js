/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Organization from './Organization';

const _debug = debug('moshi:classes:SportsOrganization');
const sport = Symbol.for('sport');


/**
 * Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.
 */
class SportsOrganization extends Organization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SportsOrganization';
  }

  set sport(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[sport] = this.constructor.toArray(sanitized);
  }

  get sport() {
    let value = this[sport];
    return this.constructor.fromArray(value);
  }

}

export default SportsOrganization;
