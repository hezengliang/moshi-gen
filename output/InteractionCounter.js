/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:InteractionCounter');
const interactionService = Symbol.for('interactionService');
const interactionType = Symbol.for('interactionType');
const userInteractionCount = Symbol.for('userInteractionCount');


/**
 * A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
 */
class InteractionCounter extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'InteractionCounter';
  }

  set interactionService(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SoftwareApplication','WebSite');
    this[interactionService] = this.constructor.toArray(sanitized);
  }

  get interactionService() {
    let value = this[interactionService];
    return this.constructor.fromArray(value);
  }  set interactionType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Action');
    this[interactionType] = this.constructor.toArray(sanitized);
  }

  get interactionType() {
    let value = this[interactionType];
    return this.constructor.fromArray(value);
  }  set userInteractionCount(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer');
    this[userInteractionCount] = this.constructor.toArray(sanitized);
  }

  get userInteractionCount() {
    let value = this[userInteractionCount];
    return this.constructor.fromArray(value);
  }

}

export default InteractionCounter;
