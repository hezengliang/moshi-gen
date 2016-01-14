/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:ListItem');
const item = Symbol.for('item');
const nextItem = Symbol.for('nextItem');
const position = Symbol.for('position');
const previousItem = Symbol.for('previousItem');


/**
 * An list item, e.g. a step in a checklist or how-to description.
 */
class ListItem extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ListItem';
  }

  set item(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[item] = this.constructor.toArray(sanitized);
  }

  get item() {
    let value = this[item];
    return this.constructor.fromArray(value);
  }  set nextItem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ListItem');
    this[nextItem] = this.constructor.toArray(sanitized);
  }

  get nextItem() {
    let value = this[nextItem];
    return this.constructor.fromArray(value);
  }  set position(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[position] = this.constructor.toArray(sanitized);
  }

  get position() {
    let value = this[position];
    return this.constructor.fromArray(value);
  }  set previousItem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ListItem');
    this[previousItem] = this.constructor.toArray(sanitized);
  }

  get previousItem() {
    let value = this[previousItem];
    return this.constructor.fromArray(value);
  }

}

export default ListItem;
