/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Service from './Service';

const _debug = debug('moshi:classes:BroadcastService');
const broadcastAffiliateOf = Symbol.for('broadcastAffiliateOf');
const broadcastDisplayName = Symbol.for('broadcastDisplayName');
const broadcastTimezone = Symbol.for('broadcastTimezone');
const broadcaster = Symbol.for('broadcaster');
const parentService = Symbol.for('parentService');
const videoFormat = Symbol.for('videoFormat');


/**
 * A delivery service through which content is provided via broadcast over the air or online.
 */
class BroadcastService extends Service {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BroadcastService';
  }

  set broadcastAffiliateOf(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[broadcastAffiliateOf] = this.constructor.toArray(sanitized);
  }

  get broadcastAffiliateOf() {
    let value = this[broadcastAffiliateOf];
    return this.constructor.fromArray(value);
  }  set broadcastDisplayName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[broadcastDisplayName] = this.constructor.toArray(sanitized);
  }

  get broadcastDisplayName() {
    let value = this[broadcastDisplayName];
    return this.constructor.fromArray(value);
  }  set broadcastTimezone(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[broadcastTimezone] = this.constructor.toArray(sanitized);
  }

  get broadcastTimezone() {
    let value = this[broadcastTimezone];
    return this.constructor.fromArray(value);
  }  set broadcaster(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[broadcaster] = this.constructor.toArray(sanitized);
  }

  get broadcaster() {
    let value = this[broadcaster];
    return this.constructor.fromArray(value);
  }  set parentService(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BroadcastService');
    this[parentService] = this.constructor.toArray(sanitized);
  }

  get parentService() {
    let value = this[parentService];
    return this.constructor.fromArray(value);
  }  set videoFormat(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[videoFormat] = this.constructor.toArray(sanitized);
  }

  get videoFormat() {
    let value = this[videoFormat];
    return this.constructor.fromArray(value);
  }

}

export default BroadcastService;
