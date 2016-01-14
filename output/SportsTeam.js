/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import SportsOrganization from './SportsOrganization';

const _debug = debug('moshi:classes:SportsTeam');
const athlete = Symbol.for('athlete');
const coach = Symbol.for('coach');


/**
 * Organization: Sports team.
 */
class SportsTeam extends SportsOrganization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SportsTeam';
  }

  set athlete(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[athlete] = this.constructor.toArray(sanitized);
  }

  get athlete() {
    let value = this[athlete];
    return this.constructor.fromArray(value);
  }  set coach(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[coach] = this.constructor.toArray(sanitized);
  }

  get coach() {
    let value = this[coach];
    return this.constructor.fromArray(value);
  }

}

export default SportsTeam;
