/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Service');
const aggregateRating = Symbol.for('aggregateRating');
const areaServed = Symbol.for('areaServed');
const availableChannel = Symbol.for('availableChannel');
const award = Symbol.for('award');
const category = Symbol.for('category');
const hasOfferCatalog = Symbol.for('hasOfferCatalog');
const hoursAvailable = Symbol.for('hoursAvailable');
const offers = Symbol.for('offers');
const provider = Symbol.for('provider');
const providerMobility = Symbol.for('providerMobility');
const review = Symbol.for('review');
const serviceOutput = Symbol.for('serviceOutput');
const serviceType = Symbol.for('serviceType');


/**
 * A service provided by an organization, e.g. delivery service, print services, etc.
 */
class Service extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Service';
  }

  set aggregateRating(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AggregateRating');
    this[aggregateRating] = this.constructor.toArray(sanitized);
  }

  get aggregateRating() {
    let value = this[aggregateRating];
    return this.constructor.fromArray(value);
  }  set areaServed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'GeoShape','AdministrativeArea','Place','Text');
    this[areaServed] = this.constructor.toArray(sanitized);
  }

  get areaServed() {
    let value = this[areaServed];
    return this.constructor.fromArray(value);
  }  set availableChannel(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ServiceChannel');
    this[availableChannel] = this.constructor.toArray(sanitized);
  }

  get availableChannel() {
    let value = this[availableChannel];
    return this.constructor.fromArray(value);
  }  set award(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[award] = this.constructor.toArray(sanitized);
  }

  get award() {
    let value = this[award];
    return this.constructor.fromArray(value);
  }  set category(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PhysicalActivityCategory','Thing','Text');
    this[category] = this.constructor.toArray(sanitized);
  }

  get category() {
    let value = this[category];
    return this.constructor.fromArray(value);
  }  set hasOfferCatalog(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OfferCatalog');
    this[hasOfferCatalog] = this.constructor.toArray(sanitized);
  }

  get hasOfferCatalog() {
    let value = this[hasOfferCatalog];
    return this.constructor.fromArray(value);
  }  set hoursAvailable(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OpeningHoursSpecification');
    this[hoursAvailable] = this.constructor.toArray(sanitized);
  }

  get hoursAvailable() {
    let value = this[hoursAvailable];
    return this.constructor.fromArray(value);
  }  set offers(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Offer');
    this[offers] = this.constructor.toArray(sanitized);
  }

  get offers() {
    let value = this[offers];
    return this.constructor.fromArray(value);
  }  set provider(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[provider] = this.constructor.toArray(sanitized);
  }

  get provider() {
    let value = this[provider];
    return this.constructor.fromArray(value);
  }  set providerMobility(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[providerMobility] = this.constructor.toArray(sanitized);
  }

  get providerMobility() {
    let value = this[providerMobility];
    return this.constructor.fromArray(value);
  }  set review(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Review');
    this[review] = this.constructor.toArray(sanitized);
  }

  get review() {
    let value = this[review];
    return this.constructor.fromArray(value);
  }  set serviceOutput(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Thing');
    this[serviceOutput] = this.constructor.toArray(sanitized);
  }

  get serviceOutput() {
    let value = this[serviceOutput];
    return this.constructor.fromArray(value);
  }  set serviceType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[serviceType] = this.constructor.toArray(sanitized);
  }

  get serviceType() {
    let value = this[serviceType];
    return this.constructor.fromArray(value);
  }

}

export default Service;
