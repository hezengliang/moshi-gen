/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Dataset from './Dataset';

const _debug = debug('moshi:classes:DataFeed');
const dataFeedElement = Symbol.for('dataFeedElement');


/**
 * A single feed providing structured information about one or more entities or topics.
 */
class DataFeed extends Dataset {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DataFeed';
  }

  set dataFeedElement(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','DataFeedItem','Thing');
    this[dataFeedElement] = this.constructor.toArray(sanitized);
  }

  get dataFeedElement() {
    let value = this[dataFeedElement];
    return this.constructor.fromArray(value);
  }

}

export default DataFeed;
