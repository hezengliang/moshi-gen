/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalIntangible from './MedicalIntangible';

const _debug = debug('moshi:classes:MedicalConditionStage');
const stageAsNumber = Symbol.for('stageAsNumber');
const subStageSuffix = Symbol.for('subStageSuffix');


/**
 * A stage of a medical condition, such as 'Stage IIIa'.
 */
class MedicalConditionStage extends MedicalIntangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalConditionStage';
  }

  set stageAsNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[stageAsNumber] = this.constructor.toArray(sanitized);
  }

  get stageAsNumber() {
    let value = this[stageAsNumber];
    return this.constructor.fromArray(value);
  }  set subStageSuffix(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[subStageSuffix] = this.constructor.toArray(sanitized);
  }

  get subStageSuffix() {
    let value = this[subStageSuffix];
    return this.constructor.fromArray(value);
  }

}

export default MedicalConditionStage;
