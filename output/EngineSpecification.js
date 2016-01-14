/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:EngineSpecification');
const fuelType = Symbol.for('fuelType');


/**
 * Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.
 */
class EngineSpecification extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'EngineSpecification';
  }

  set fuelType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','URL','QualitativeValue');
    this[fuelType] = this.constructor.toArray(sanitized);
  }

  get fuelType() {
    let value = this[fuelType];
    return this.constructor.fromArray(value);
  }

}

export default EngineSpecification;
