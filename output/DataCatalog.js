/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:DataCatalog');
const dataset = Symbol.for('dataset');


/**
 * A collection of datasets.
 */
class DataCatalog extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DataCatalog';
  }

  set dataset(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Dataset');
    this[dataset] = this.constructor.toArray(sanitized);
  }

  get dataset() {
    let value = this[dataset];
    return this.constructor.fromArray(value);
  }

}

export default DataCatalog;
