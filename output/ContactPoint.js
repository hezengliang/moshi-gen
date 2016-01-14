/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import StructuredValue from './StructuredValue';

const _debug = debug('moshi:classes:ContactPoint');
const areaServed = Symbol.for('areaServed');
const availableLanguage = Symbol.for('availableLanguage');
const contactOption = Symbol.for('contactOption');
const contactType = Symbol.for('contactType');
const email = Symbol.for('email');
const faxNumber = Symbol.for('faxNumber');
const hoursAvailable = Symbol.for('hoursAvailable');
const productSupported = Symbol.for('productSupported');
const telephone = Symbol.for('telephone');


/**
 * A contact point—for example, a Customer Complaints department.
 */
class ContactPoint extends StructuredValue {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ContactPoint';
  }

  set areaServed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AdministrativeArea','Place','Text','GeoShape');
    this[areaServed] = this.constructor.toArray(sanitized);
  }

  get areaServed() {
    let value = this[areaServed];
    return this.constructor.fromArray(value);
  }  set availableLanguage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Language');
    this[availableLanguage] = this.constructor.toArray(sanitized);
  }

  get availableLanguage() {
    let value = this[availableLanguage];
    return this.constructor.fromArray(value);
  }  set contactOption(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ContactPointOption');
    this[contactOption] = this.constructor.toArray(sanitized);
  }

  get contactOption() {
    let value = this[contactOption];
    return this.constructor.fromArray(value);
  }  set contactType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[contactType] = this.constructor.toArray(sanitized);
  }

  get contactType() {
    let value = this[contactType];
    return this.constructor.fromArray(value);
  }  set email(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[email] = this.constructor.toArray(sanitized);
  }

  get email() {
    let value = this[email];
    return this.constructor.fromArray(value);
  }  set faxNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[faxNumber] = this.constructor.toArray(sanitized);
  }

  get faxNumber() {
    let value = this[faxNumber];
    return this.constructor.fromArray(value);
  }  set hoursAvailable(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OpeningHoursSpecification');
    this[hoursAvailable] = this.constructor.toArray(sanitized);
  }

  get hoursAvailable() {
    let value = this[hoursAvailable];
    return this.constructor.fromArray(value);
  }  set productSupported(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','Product');
    this[productSupported] = this.constructor.toArray(sanitized);
  }

  get productSupported() {
    let value = this[productSupported];
    return this.constructor.fromArray(value);
  }  set telephone(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[telephone] = this.constructor.toArray(sanitized);
  }

  get telephone() {
    let value = this[telephone];
    return this.constructor.fromArray(value);
  }

}

export default ContactPoint;
