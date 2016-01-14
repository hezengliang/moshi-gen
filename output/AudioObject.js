/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MediaObject from './MediaObject';

const _debug = debug('moshi:classes:AudioObject');
const transcript = Symbol.for('transcript');


/**
 * An audio file.
 */
class AudioObject extends MediaObject {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AudioObject';
  }

  set transcript(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[transcript] = this.constructor.toArray(sanitized);
  }

  get transcript() {
    let value = this[transcript];
    return this.constructor.fromArray(value);
  }

}

export default AudioObject;
