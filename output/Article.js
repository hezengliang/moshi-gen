/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Article');
const articleBody = Symbol.for('articleBody');
const articleSection = Symbol.for('articleSection');
const pageEnd = Symbol.for('pageEnd');
const pageStart = Symbol.for('pageStart');
const pagination = Symbol.for('pagination');
const wordCount = Symbol.for('wordCount');


/**
 * An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all. See also blog post.
 */
class Article extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Article';
  }

  set articleBody(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[articleBody] = this.constructor.toArray(sanitized);
  }

  get articleBody() {
    let value = this[articleBody];
    return this.constructor.fromArray(value);
  }  set articleSection(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[articleSection] = this.constructor.toArray(sanitized);
  }

  get articleSection() {
    let value = this[articleSection];
    return this.constructor.fromArray(value);
  }  set pageEnd(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[pageEnd] = this.constructor.toArray(sanitized);
  }

  get pageEnd() {
    let value = this[pageEnd];
    return this.constructor.fromArray(value);
  }  set pageStart(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[pageStart] = this.constructor.toArray(sanitized);
  }

  get pageStart() {
    let value = this[pageStart];
    return this.constructor.fromArray(value);
  }  set pagination(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[pagination] = this.constructor.toArray(sanitized);
  }

  get pagination() {
    let value = this[pagination];
    return this.constructor.fromArray(value);
  }  set wordCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[wordCount] = this.constructor.toArray(sanitized);
  }

  get wordCount() {
    let value = this[wordCount];
    return this.constructor.fromArray(value);
  }

}

export default Article;
