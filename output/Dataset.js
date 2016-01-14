/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Dataset');
const datasetTimeInterval = Symbol.for('datasetTimeInterval');
const distribution = Symbol.for('distribution');
const includedDataCatalog = Symbol.for('includedDataCatalog');
const spatial = Symbol.for('spatial');


/**
 * A body of structured information describing some topic(s) of interest.
 */
class Dataset extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Dataset';
  }

  set datasetTimeInterval(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[datasetTimeInterval] = this.constructor.toArray(sanitized);
  }

  get datasetTimeInterval() {
    let value = this[datasetTimeInterval];
    return this.constructor.fromArray(value);
  }  set distribution(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DataDownload');
    this[distribution] = this.constructor.toArray(sanitized);
  }

  get distribution() {
    let value = this[distribution];
    return this.constructor.fromArray(value);
  }  set includedDataCatalog(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DataCatalog');
    this[includedDataCatalog] = this.constructor.toArray(sanitized);
  }

  get includedDataCatalog() {
    let value = this[includedDataCatalog];
    return this.constructor.fromArray(value);
  }  set spatial(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[spatial] = this.constructor.toArray(sanitized);
  }

  get spatial() {
    let value = this[spatial];
    return this.constructor.fromArray(value);
  }

}

export default Dataset;
