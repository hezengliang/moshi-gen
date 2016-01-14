/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalCondition from './MedicalCondition';

const _debug = debug('moshi:classes:InfectiousDisease');
const infectiousAgent = Symbol.for('infectiousAgent');
const infectiousAgentClass = Symbol.for('infectiousAgentClass');
const transmissionMethod = Symbol.for('transmissionMethod');


/**
 * An infectious disease is a clinically evident human disease resulting from the presence of pathogenic microbial agents, like pathogenic viruses, pathogenic bacteria, fungi, protozoa, multicellular parasites, and prions. To be considered an infectious disease, such pathogens are known to be able to cause this disease.
 */
class InfectiousDisease extends MedicalCondition {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'InfectiousDisease';
  }

  set infectiousAgent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[infectiousAgent] = this.constructor.toArray(sanitized);
  }

  get infectiousAgent() {
    let value = this[infectiousAgent];
    return this.constructor.fromArray(value);
  }  set infectiousAgentClass(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'InfectiousAgentClass');
    this[infectiousAgentClass] = this.constructor.toArray(sanitized);
  }

  get infectiousAgentClass() {
    let value = this[infectiousAgentClass];
    return this.constructor.fromArray(value);
  }  set transmissionMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[transmissionMethod] = this.constructor.toArray(sanitized);
  }

  get transmissionMethod() {
    let value = this[transmissionMethod];
    return this.constructor.fromArray(value);
  }

}

export default InfectiousDisease;
