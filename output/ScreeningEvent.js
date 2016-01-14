/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Event from './Event';

const _debug = debug('moshi:classes:ScreeningEvent');
const subtitleLanguage = Symbol.for('subtitleLanguage');
const videoFormat = Symbol.for('videoFormat');
const workPresented = Symbol.for('workPresented');


/**
 * A screening of a movie or other video.
 */
class ScreeningEvent extends Event {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ScreeningEvent';
  }

  set subtitleLanguage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Language','Text');
    this[subtitleLanguage] = this.constructor.toArray(sanitized);
  }

  get subtitleLanguage() {
    let value = this[subtitleLanguage];
    return this.constructor.fromArray(value);
  }  set videoFormat(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[videoFormat] = this.constructor.toArray(sanitized);
  }

  get videoFormat() {
    let value = this[videoFormat];
    return this.constructor.fromArray(value);
  }  set workPresented(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Movie');
    this[workPresented] = this.constructor.toArray(sanitized);
  }

  get workPresented() {
    let value = this[workPresented];
    return this.constructor.fromArray(value);
  }

}

export default ScreeningEvent;
