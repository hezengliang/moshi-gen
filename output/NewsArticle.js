/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Article from './Article';

const _debug = debug('moshi:classes:NewsArticle');
const dateline = Symbol.for('dateline');
const printColumn = Symbol.for('printColumn');
const printEdition = Symbol.for('printEdition');
const printPage = Symbol.for('printPage');
const printSection = Symbol.for('printSection');


/**
 * A news article.
 */
class NewsArticle extends Article {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'NewsArticle';
  }

  set dateline(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[dateline] = this.constructor.toArray(sanitized);
  }

  get dateline() {
    let value = this[dateline];
    return this.constructor.fromArray(value);
  }  set printColumn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[printColumn] = this.constructor.toArray(sanitized);
  }

  get printColumn() {
    let value = this[printColumn];
    return this.constructor.fromArray(value);
  }  set printEdition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[printEdition] = this.constructor.toArray(sanitized);
  }

  get printEdition() {
    let value = this[printEdition];
    return this.constructor.fromArray(value);
  }  set printPage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[printPage] = this.constructor.toArray(sanitized);
  }

  get printPage() {
    let value = this[printPage];
    return this.constructor.fromArray(value);
  }  set printSection(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[printSection] = this.constructor.toArray(sanitized);
  }

  get printSection() {
    let value = this[printSection];
    return this.constructor.fromArray(value);
  }

}

export default NewsArticle;
