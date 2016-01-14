/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:AlignmentObject');
const alignmentType = Symbol.for('alignmentType');
const educationalFramework = Symbol.for('educationalFramework');
const targetDescription = Symbol.for('targetDescription');
const targetName = Symbol.for('targetName');
const targetUrl = Symbol.for('targetUrl');


/**
 * An intangible item that describes an alignment between a learning resource and a node in an educational framework.
 */
class AlignmentObject extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AlignmentObject';
  }

  set alignmentType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[alignmentType] = this.constructor.toArray(sanitized);
  }

  get alignmentType() {
    let value = this[alignmentType];
    return this.constructor.fromArray(value);
  }  set educationalFramework(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[educationalFramework] = this.constructor.toArray(sanitized);
  }

  get educationalFramework() {
    let value = this[educationalFramework];
    return this.constructor.fromArray(value);
  }  set targetDescription(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[targetDescription] = this.constructor.toArray(sanitized);
  }

  get targetDescription() {
    let value = this[targetDescription];
    return this.constructor.fromArray(value);
  }  set targetName(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[targetName] = this.constructor.toArray(sanitized);
  }

  get targetName() {
    let value = this[targetName];
    return this.constructor.fromArray(value);
  }  set targetUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[targetUrl] = this.constructor.toArray(sanitized);
  }

  get targetUrl() {
    let value = this[targetUrl];
    return this.constructor.fromArray(value);
  }

}

export default AlignmentObject;
