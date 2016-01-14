/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:WebPage');
const breadcrumb = Symbol.for('breadcrumb');
const lastReviewed = Symbol.for('lastReviewed');
const mainContentOfPage = Symbol.for('mainContentOfPage');
const primaryImageOfPage = Symbol.for('primaryImageOfPage');
const relatedLink = Symbol.for('relatedLink');
const reviewedBy = Symbol.for('reviewedBy');
const significantLink = Symbol.for('significantLink');
const specialty = Symbol.for('specialty');


/**
 * A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as breadcrumb may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.
 */
class WebPage extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'WebPage';
  }

  set breadcrumb(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','BreadcrumbList');
    this[breadcrumb] = this.constructor.toArray(sanitized);
  }

  get breadcrumb() {
    let value = this[breadcrumb];
    return this.constructor.fromArray(value);
  }  set lastReviewed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[lastReviewed] = this.constructor.toArray(sanitized);
  }

  get lastReviewed() {
    let value = this[lastReviewed];
    return this.constructor.fromArray(value);
  }  set mainContentOfPage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'WebPageElement');
    this[mainContentOfPage] = this.constructor.toArray(sanitized);
  }

  get mainContentOfPage() {
    let value = this[mainContentOfPage];
    return this.constructor.fromArray(value);
  }  set primaryImageOfPage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ImageObject');
    this[primaryImageOfPage] = this.constructor.toArray(sanitized);
  }

  get primaryImageOfPage() {
    let value = this[primaryImageOfPage];
    return this.constructor.fromArray(value);
  }  set relatedLink(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[relatedLink] = this.constructor.toArray(sanitized);
  }

  get relatedLink() {
    let value = this[relatedLink];
    return this.constructor.fromArray(value);
  }  set reviewedBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[reviewedBy] = this.constructor.toArray(sanitized);
  }

  get reviewedBy() {
    let value = this[reviewedBy];
    return this.constructor.fromArray(value);
  }  set significantLink(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[significantLink] = this.constructor.toArray(sanitized);
  }

  get significantLink() {
    let value = this[significantLink];
    return this.constructor.fromArray(value);
  }  set specialty(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Specialty');
    this[specialty] = this.constructor.toArray(sanitized);
  }

  get specialty() {
    let value = this[specialty];
    return this.constructor.fromArray(value);
  }

}

export default WebPage;
