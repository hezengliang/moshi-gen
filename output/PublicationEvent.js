/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Event from './Event';

const _debug = debug('moshi:classes:PublicationEvent');
const isAccessibleForFree = Symbol.for('isAccessibleForFree');
const publishedOn = Symbol.for('publishedOn');


/**
 * A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.
 */
class PublicationEvent extends Event {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PublicationEvent';
  }

  set isAccessibleForFree(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[isAccessibleForFree] = this.constructor.toArray(sanitized);
  }

  get isAccessibleForFree() {
    let value = this[isAccessibleForFree];
    return this.constructor.fromArray(value);
  }  set publishedOn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BroadcastService');
    this[publishedOn] = this.constructor.toArray(sanitized);
  }

  get publishedOn() {
    let value = this[publishedOn];
    return this.constructor.fromArray(value);
  }

}

export default PublicationEvent;
