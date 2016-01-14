/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:PropertyValue');
const maxValue = Symbol.for('maxValue');
const minValue = Symbol.for('minValue');
const propertyID = Symbol.for('propertyID');
const unitCode = Symbol.for('unitCode');
const unitText = Symbol.for('unitText');
const value = Symbol.for('value');
const valueReference = Symbol.for('valueReference');


/**
 * A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property. Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
 */
class PropertyValue extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PropertyValue';
  }

  set maxValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[maxValue] = this.constructor.toArray(sanitized);
  }

  get maxValue() {
    let value = this[maxValue];
    return this.constructor.fromArray(value);
  }  set minValue(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number');
    this[minValue] = this.constructor.toArray(sanitized);
  }

  get minValue() {
    let value = this[minValue];
    return this.constructor.fromArray(value);
  }  set propertyID(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[propertyID] = this.constructor.toArray(sanitized);
  }

  get propertyID() {
    let value = this[propertyID];
    return this.constructor.fromArray(value);
  }  set unitCode(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[unitCode] = this.constructor.toArray(sanitized);
  }

  get unitCode() {
    let value = this[unitCode];
    return this.constructor.fromArray(value);
  }  set unitText(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[unitText] = this.constructor.toArray(sanitized);
  }

  get unitText() {
    let value = this[unitText];
    return this.constructor.fromArray(value);
  }  set value(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Boolean','Text','StructuredValue');
    this[value] = this.constructor.toArray(sanitized);
  }

  get value() {
    let value = this[value];
    return this.constructor.fromArray(value);
  }  set valueReference(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue','QualitativeValue','Enumeration','StructuredValue','PropertyValue');
    this[valueReference] = this.constructor.toArray(sanitized);
  }

  get valueReference() {
    let value = this[valueReference];
    return this.constructor.fromArray(value);
  }

}

export default PropertyValue;
