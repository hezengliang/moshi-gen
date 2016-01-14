/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:BroadcastChannel');
const broadcastChannelId = Symbol.for('broadcastChannelId');
const broadcastServiceTier = Symbol.for('broadcastServiceTier');
const inBroadcastLineup = Symbol.for('inBroadcastLineup');
const providesBroadcastService = Symbol.for('providesBroadcastService');


/**
 * A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
 */
class BroadcastChannel extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BroadcastChannel';
  }

  set broadcastChannelId(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[broadcastChannelId] = this.constructor.toArray(sanitized);
  }

  get broadcastChannelId() {
    let value = this[broadcastChannelId];
    return this.constructor.fromArray(value);
  }  set broadcastServiceTier(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[broadcastServiceTier] = this.constructor.toArray(sanitized);
  }

  get broadcastServiceTier() {
    let value = this[broadcastServiceTier];
    return this.constructor.fromArray(value);
  }  set inBroadcastLineup(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CableOrSatelliteService');
    this[inBroadcastLineup] = this.constructor.toArray(sanitized);
  }

  get inBroadcastLineup() {
    let value = this[inBroadcastLineup];
    return this.constructor.fromArray(value);
  }  set providesBroadcastService(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BroadcastService');
    this[providesBroadcastService] = this.constructor.toArray(sanitized);
  }

  get providesBroadcastService() {
    let value = this[providesBroadcastService];
    return this.constructor.fromArray(value);
  }

}

export default BroadcastChannel;
