/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Book');
const bookEdition = Symbol.for('bookEdition');
const bookFormat = Symbol.for('bookFormat');
const illustrator = Symbol.for('illustrator');
const isbn = Symbol.for('isbn');
const numberOfPages = Symbol.for('numberOfPages');


/**
 * A book.
 */
class Book extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Book';
  }

  set bookEdition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[bookEdition] = this.constructor.toArray(sanitized);
  }

  get bookEdition() {
    let value = this[bookEdition];
    return this.constructor.fromArray(value);
  }  set bookFormat(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BookFormatType');
    this[bookFormat] = this.constructor.toArray(sanitized);
  }

  get bookFormat() {
    let value = this[bookFormat];
    return this.constructor.fromArray(value);
  }  set illustrator(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[illustrator] = this.constructor.toArray(sanitized);
  }

  get illustrator() {
    let value = this[illustrator];
    return this.constructor.fromArray(value);
  }  set isbn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[isbn] = this.constructor.toArray(sanitized);
  }

  get isbn() {
    let value = this[isbn];
    return this.constructor.fromArray(value);
  }  set numberOfPages(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[numberOfPages] = this.constructor.toArray(sanitized);
  }

  get numberOfPages() {
    let value = this[numberOfPages];
    return this.constructor.fromArray(value);
  }

}

export default Book;
