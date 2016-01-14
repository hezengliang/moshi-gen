/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Audience');
const audienceType = Symbol.for('audienceType');
const geographicArea = Symbol.for('geographicArea');


/**
 * Intended audience for an item, i.e. the group for whom the item was created.
 */
class Audience extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Audience';
  }

  set audienceType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[audienceType] = this.constructor.toArray(sanitized);
  }

  get audienceType() {
    let value = this[audienceType];
    return this.constructor.fromArray(value);
  }  set geographicArea(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AdministrativeArea');
    this[geographicArea] = this.constructor.toArray(sanitized);
  }

  get geographicArea() {
    let value = this[geographicArea];
    return this.constructor.fromArray(value);
  }

}

export default Audience;
