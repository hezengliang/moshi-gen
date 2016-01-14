/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ScholarlyArticle from './ScholarlyArticle';

const _debug = debug('moshi:classes:MedicalScholarlyArticle');
const publicationType = Symbol.for('publicationType');


/**
 * A scholarly article in the medical domain.
 */
class MedicalScholarlyArticle extends ScholarlyArticle {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalScholarlyArticle';
  }

  set publicationType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[publicationType] = this.constructor.toArray(sanitized);
  }

  get publicationType() {
    let value = this[publicationType];
    return this.constructor.fromArray(value);
  }

}

export default MedicalScholarlyArticle;
