/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:ServiceChannel');
const availableLanguage = Symbol.for('availableLanguage');
const processingTime = Symbol.for('processingTime');
const providesService = Symbol.for('providesService');
const serviceLocation = Symbol.for('serviceLocation');
const servicePhone = Symbol.for('servicePhone');
const servicePostalAddress = Symbol.for('servicePostalAddress');
const serviceSmsNumber = Symbol.for('serviceSmsNumber');
const serviceUrl = Symbol.for('serviceUrl');


/**
 * A means for accessing a service, e.g. a government office location, web site, or phone number.
 */
class ServiceChannel extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ServiceChannel';
  }

  set availableLanguage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Language');
    this[availableLanguage] = this.constructor.toArray(sanitized);
  }

  get availableLanguage() {
    let value = this[availableLanguage];
    return this.constructor.fromArray(value);
  }  set processingTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[processingTime] = this.constructor.toArray(sanitized);
  }

  get processingTime() {
    let value = this[processingTime];
    return this.constructor.fromArray(value);
  }  set providesService(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Service');
    this[providesService] = this.constructor.toArray(sanitized);
  }

  get providesService() {
    let value = this[providesService];
    return this.constructor.fromArray(value);
  }  set serviceLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[serviceLocation] = this.constructor.toArray(sanitized);
  }

  get serviceLocation() {
    let value = this[serviceLocation];
    return this.constructor.fromArray(value);
  }  set servicePhone(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ContactPoint');
    this[servicePhone] = this.constructor.toArray(sanitized);
  }

  get servicePhone() {
    let value = this[servicePhone];
    return this.constructor.fromArray(value);
  }  set servicePostalAddress(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PostalAddress');
    this[servicePostalAddress] = this.constructor.toArray(sanitized);
  }

  get servicePostalAddress() {
    let value = this[servicePostalAddress];
    return this.constructor.fromArray(value);
  }  set serviceSmsNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ContactPoint');
    this[serviceSmsNumber] = this.constructor.toArray(sanitized);
  }

  get serviceSmsNumber() {
    let value = this[serviceSmsNumber];
    return this.constructor.fromArray(value);
  }  set serviceUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[serviceUrl] = this.constructor.toArray(sanitized);
  }

  get serviceUrl() {
    let value = this[serviceUrl];
    return this.constructor.fromArray(value);
  }

}

export default ServiceChannel;
