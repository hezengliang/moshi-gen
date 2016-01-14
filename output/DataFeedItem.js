/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:DataFeedItem');
const dateCreated = Symbol.for('dateCreated');
const dateDeleted = Symbol.for('dateDeleted');
const dateModified = Symbol.for('dateModified');
const item = Symbol.for('item');


/**
 * A single item within a larger data feed.
 */
class DataFeedItem extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DataFeedItem';
  }

  set dateCreated(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime','Date');
    this[dateCreated] = this.constructor.toArray(sanitized);
  }

  get dateCreated() {
    let value = this[dateCreated];
    return this.constructor.fromArray(value);
  }  set dateDeleted(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[dateDeleted] = this.constructor.toArray(sanitized);
  }

  get dateDeleted() {
    let value = this[dateDeleted];
    return this.constructor.fromArray(value);
  }  set dateModified(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime','Date');
    this[dateModified] = this.constructor.toArray(sanitized);
  }

  get dateModified() {
    let value = this[dateModified];
    return this.constructor.fromArray(value);
  }  set item(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[item] = this.constructor.toArray(sanitized);
  }

  get item() {
    let value = this[item];
    return this.constructor.fromArray(value);
  }

}

export default DataFeedItem;
