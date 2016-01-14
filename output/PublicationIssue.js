/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:PublicationIssue');
const issueNumber = Symbol.for('issueNumber');
const pageEnd = Symbol.for('pageEnd');
const pageStart = Symbol.for('pageStart');
const pagination = Symbol.for('pagination');


/**
 * A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles. See also blog post.
 */
class PublicationIssue extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PublicationIssue';
  }

  set issueNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[issueNumber] = this.constructor.toArray(sanitized);
  }

  get issueNumber() {
    let value = this[issueNumber];
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
  }

}

export default PublicationIssue;
