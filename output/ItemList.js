/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:ItemList');
const itemListElement = Symbol.for('itemListElement');
const itemListOrder = Symbol.for('itemListOrder');
const numberOfItems = Symbol.for('numberOfItems');


/**
 * A list of items of any sort—for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.
 */
class ItemList extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ItemList';
  }

  set itemListElement(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','ListItem','Thing');
    this[itemListElement] = this.constructor.toArray(sanitized);
  }

  get itemListElement() {
    let value = this[itemListElement];
    return this.constructor.fromArray(value);
  }  set itemListOrder(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ItemListOrderType','Text');
    this[itemListOrder] = this.constructor.toArray(sanitized);
  }

  get itemListOrder() {
    let value = this[itemListOrder];
    return this.constructor.fromArray(value);
  }  set numberOfItems(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[numberOfItems] = this.constructor.toArray(sanitized);
  }

  get numberOfItems() {
    let value = this[numberOfItems];
    return this.constructor.fromArray(value);
  }

}

export default ItemList;
