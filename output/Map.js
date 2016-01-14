/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:Map');
const mapType = Symbol.for('mapType');


/**
 * A map.
 */
class Map extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Map';
  }

  set mapType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MapCategoryType');
    this[mapType] = this.constructor.toArray(sanitized);
  }

  get mapType() {
    let value = this[mapType];
    return this.constructor.fromArray(value);
  }

}

export default Map;
