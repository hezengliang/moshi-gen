/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PublicationEvent from './PublicationEvent';

const _debug = debug('moshi:classes:BroadcastEvent');
const broadcastOfEvent = Symbol.for('broadcastOfEvent');
const isLiveBroadcast = Symbol.for('isLiveBroadcast');
const videoFormat = Symbol.for('videoFormat');


/**
 * An over the air or online broadcast event.
 */
class BroadcastEvent extends PublicationEvent {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BroadcastEvent';
  }

  set broadcastOfEvent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Event');
    this[broadcastOfEvent] = this.constructor.toArray(sanitized);
  }

  get broadcastOfEvent() {
    let value = this[broadcastOfEvent];
    return this.constructor.fromArray(value);
  }  set isLiveBroadcast(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[isLiveBroadcast] = this.constructor.toArray(sanitized);
  }

  get isLiveBroadcast() {
    let value = this[isLiveBroadcast];
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

export default BroadcastEvent;
