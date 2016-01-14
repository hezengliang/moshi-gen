/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Event from './Event';

const _debug = debug('moshi:classes:SportsEvent');
const awayTeam = Symbol.for('awayTeam');
const competitor = Symbol.for('competitor');
const homeTeam = Symbol.for('homeTeam');


/**
 * Event type: Sports event.
 */
class SportsEvent extends Event {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SportsEvent';
  }

  set awayTeam(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SportsTeam','Person');
    this[awayTeam] = this.constructor.toArray(sanitized);
  }

  get awayTeam() {
    let value = this[awayTeam];
    return this.constructor.fromArray(value);
  }  set competitor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SportsTeam','Person');
    this[competitor] = this.constructor.toArray(sanitized);
  }

  get competitor() {
    let value = this[competitor];
    return this.constructor.fromArray(value);
  }  set homeTeam(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SportsTeam','Person');
    this[homeTeam] = this.constructor.toArray(sanitized);
  }

  get homeTeam() {
    let value = this[homeTeam];
    return this.constructor.fromArray(value);
  }

}

export default SportsEvent;
