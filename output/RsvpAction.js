/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import InformAction from './InformAction';

const _debug = debug('moshi:classes:RsvpAction');
const additionalNumberOfGuests = Symbol.for('additionalNumberOfGuests');
const comment = Symbol.for('comment');
const rsvpResponse = Symbol.for('rsvpResponse');


/**
 * The act of notifying an event organizer as to whether you expect to attend the event.
 */
class RsvpAction extends InformAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'RsvpAction';
  }

  set additionalNumberOfGuests(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[additionalNumberOfGuests] = this.constructor.toArray(sanitized);
  }

  get additionalNumberOfGuests() {
    let value = this[additionalNumberOfGuests];
    return this.constructor.fromArray(value);
  }  set comment(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Comment');
    this[comment] = this.constructor.toArray(sanitized);
  }

  get comment() {
    let value = this[comment];
    return this.constructor.fromArray(value);
  }  set rsvpResponse(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'RsvpResponseType');
    this[rsvpResponse] = this.constructor.toArray(sanitized);
  }

  get rsvpResponse() {
    let value = this[rsvpResponse];
    return this.constructor.fromArray(value);
  }

}

export default RsvpAction;
