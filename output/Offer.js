/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:Offer');
const acceptedPaymentMethod = Symbol.for('acceptedPaymentMethod');
const addOn = Symbol.for('addOn');
const advanceBookingRequirement = Symbol.for('advanceBookingRequirement');
const aggregateRating = Symbol.for('aggregateRating');
const areaServed = Symbol.for('areaServed');
const availability = Symbol.for('availability');
const availabilityEnds = Symbol.for('availabilityEnds');
const availabilityStarts = Symbol.for('availabilityStarts');
const availableAtOrFrom = Symbol.for('availableAtOrFrom');
const availableDeliveryMethod = Symbol.for('availableDeliveryMethod');
const businessFunction = Symbol.for('businessFunction');
const category = Symbol.for('category');
const deliveryLeadTime = Symbol.for('deliveryLeadTime');
const eligibleCustomerType = Symbol.for('eligibleCustomerType');
const eligibleDuration = Symbol.for('eligibleDuration');
const eligibleQuantity = Symbol.for('eligibleQuantity');
const eligibleRegion = Symbol.for('eligibleRegion');
const eligibleTransactionVolume = Symbol.for('eligibleTransactionVolume');
const gtin12 = Symbol.for('gtin12');
const gtin13 = Symbol.for('gtin13');
const gtin14 = Symbol.for('gtin14');
const gtin8 = Symbol.for('gtin8');
const includesObject = Symbol.for('includesObject');
const ineligibleRegion = Symbol.for('ineligibleRegion');
const inventoryLevel = Symbol.for('inventoryLevel');
const itemCondition = Symbol.for('itemCondition');
const itemOffered = Symbol.for('itemOffered');
const mpn = Symbol.for('mpn');
const offeredBy = Symbol.for('offeredBy');
const price = Symbol.for('price');
const priceCurrency = Symbol.for('priceCurrency');
const priceSpecification = Symbol.for('priceSpecification');
const priceValidUntil = Symbol.for('priceValidUntil');
const review = Symbol.for('review');
const seller = Symbol.for('seller');
const serialNumber = Symbol.for('serialNumber');
const sku = Symbol.for('sku');
const validFrom = Symbol.for('validFrom');
const validThrough = Symbol.for('validThrough');
const warranty = Symbol.for('warranty');


/**
 * An offer to transfer some rights to an item or to provide a service—for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book. For GTIN-related fields, see Check Digit calculator and validation guide from GS1.
 */
class Offer extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Offer';
  }

  set acceptedPaymentMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PaymentMethod');
    this[acceptedPaymentMethod] = this.constructor.toArray(sanitized);
  }

  get acceptedPaymentMethod() {
    let value = this[acceptedPaymentMethod];
    return this.constructor.fromArray(value);
  }  set addOn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Offer');
    this[addOn] = this.constructor.toArray(sanitized);
  }

  get addOn() {
    let value = this[addOn];
    return this.constructor.fromArray(value);
  }  set advanceBookingRequirement(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[advanceBookingRequirement] = this.constructor.toArray(sanitized);
  }

  get advanceBookingRequirement() {
    let value = this[advanceBookingRequirement];
    return this.constructor.fromArray(value);
  }  set aggregateRating(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AggregateRating');
    this[aggregateRating] = this.constructor.toArray(sanitized);
  }

  get aggregateRating() {
    let value = this[aggregateRating];
    return this.constructor.fromArray(value);
  }  set areaServed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','GeoShape','AdministrativeArea','Place');
    this[areaServed] = this.constructor.toArray(sanitized);
  }

  get areaServed() {
    let value = this[areaServed];
    return this.constructor.fromArray(value);
  }  set availability(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ItemAvailability');
    this[availability] = this.constructor.toArray(sanitized);
  }

  get availability() {
    let value = this[availability];
    return this.constructor.fromArray(value);
  }  set availabilityEnds(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[availabilityEnds] = this.constructor.toArray(sanitized);
  }

  get availabilityEnds() {
    let value = this[availabilityEnds];
    return this.constructor.fromArray(value);
  }  set availabilityStarts(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[availabilityStarts] = this.constructor.toArray(sanitized);
  }

  get availabilityStarts() {
    let value = this[availabilityStarts];
    return this.constructor.fromArray(value);
  }  set availableAtOrFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[availableAtOrFrom] = this.constructor.toArray(sanitized);
  }

  get availableAtOrFrom() {
    let value = this[availableAtOrFrom];
    return this.constructor.fromArray(value);
  }  set availableDeliveryMethod(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DeliveryMethod');
    this[availableDeliveryMethod] = this.constructor.toArray(sanitized);
  }

  get availableDeliveryMethod() {
    let value = this[availableDeliveryMethod];
    return this.constructor.fromArray(value);
  }  set businessFunction(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BusinessFunction');
    this[businessFunction] = this.constructor.toArray(sanitized);
  }

  get businessFunction() {
    let value = this[businessFunction];
    return this.constructor.fromArray(value);
  }  set category(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','PhysicalActivityCategory','Thing');
    this[category] = this.constructor.toArray(sanitized);
  }

  get category() {
    let value = this[category];
    return this.constructor.fromArray(value);
  }  set deliveryLeadTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[deliveryLeadTime] = this.constructor.toArray(sanitized);
  }

  get deliveryLeadTime() {
    let value = this[deliveryLeadTime];
    return this.constructor.fromArray(value);
  }  set eligibleCustomerType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'BusinessEntityType');
    this[eligibleCustomerType] = this.constructor.toArray(sanitized);
  }

  get eligibleCustomerType() {
    let value = this[eligibleCustomerType];
    return this.constructor.fromArray(value);
  }  set eligibleDuration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[eligibleDuration] = this.constructor.toArray(sanitized);
  }

  get eligibleDuration() {
    let value = this[eligibleDuration];
    return this.constructor.fromArray(value);
  }  set eligibleQuantity(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[eligibleQuantity] = this.constructor.toArray(sanitized);
  }

  get eligibleQuantity() {
    let value = this[eligibleQuantity];
    return this.constructor.fromArray(value);
  }  set eligibleRegion(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','GeoShape','Place');
    this[eligibleRegion] = this.constructor.toArray(sanitized);
  }

  get eligibleRegion() {
    let value = this[eligibleRegion];
    return this.constructor.fromArray(value);
  }  set eligibleTransactionVolume(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PriceSpecification');
    this[eligibleTransactionVolume] = this.constructor.toArray(sanitized);
  }

  get eligibleTransactionVolume() {
    let value = this[eligibleTransactionVolume];
    return this.constructor.fromArray(value);
  }  set gtin12(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[gtin12] = this.constructor.toArray(sanitized);
  }

  get gtin12() {
    let value = this[gtin12];
    return this.constructor.fromArray(value);
  }  set gtin13(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[gtin13] = this.constructor.toArray(sanitized);
  }

  get gtin13() {
    let value = this[gtin13];
    return this.constructor.fromArray(value);
  }  set gtin14(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[gtin14] = this.constructor.toArray(sanitized);
  }

  get gtin14() {
    let value = this[gtin14];
    return this.constructor.fromArray(value);
  }  set gtin8(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[gtin8] = this.constructor.toArray(sanitized);
  }

  get gtin8() {
    let value = this[gtin8];
    return this.constructor.fromArray(value);
  }  set includesObject(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'TypeAndQuantityNode');
    this[includesObject] = this.constructor.toArray(sanitized);
  }

  get includesObject() {
    let value = this[includesObject];
    return this.constructor.fromArray(value);
  }  set ineligibleRegion(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','GeoShape','Place');
    this[ineligibleRegion] = this.constructor.toArray(sanitized);
  }

  get ineligibleRegion() {
    let value = this[ineligibleRegion];
    return this.constructor.fromArray(value);
  }  set inventoryLevel(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[inventoryLevel] = this.constructor.toArray(sanitized);
  }

  get inventoryLevel() {
    let value = this[inventoryLevel];
    return this.constructor.fromArray(value);
  }  set itemCondition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OfferItemCondition');
    this[itemCondition] = this.constructor.toArray(sanitized);
  }

  get itemCondition() {
    let value = this[itemCondition];
    return this.constructor.fromArray(value);
  }  set itemOffered(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Product','Service');
    this[itemOffered] = this.constructor.toArray(sanitized);
  }

  get itemOffered() {
    let value = this[itemOffered];
    return this.constructor.fromArray(value);
  }  set mpn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[mpn] = this.constructor.toArray(sanitized);
  }

  get mpn() {
    let value = this[mpn];
    return this.constructor.fromArray(value);
  }  set offeredBy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[offeredBy] = this.constructor.toArray(sanitized);
  }

  get offeredBy() {
    let value = this[offeredBy];
    return this.constructor.fromArray(value);
  }  set price(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','Number');
    this[price] = this.constructor.toArray(sanitized);
  }

  get price() {
    let value = this[price];
    return this.constructor.fromArray(value);
  }  set priceCurrency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[priceCurrency] = this.constructor.toArray(sanitized);
  }

  get priceCurrency() {
    let value = this[priceCurrency];
    return this.constructor.fromArray(value);
  }  set priceSpecification(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PriceSpecification');
    this[priceSpecification] = this.constructor.toArray(sanitized);
  }

  get priceSpecification() {
    let value = this[priceSpecification];
    return this.constructor.fromArray(value);
  }  set priceValidUntil(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[priceValidUntil] = this.constructor.toArray(sanitized);
  }

  get priceValidUntil() {
    let value = this[priceValidUntil];
    return this.constructor.fromArray(value);
  }  set review(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Review');
    this[review] = this.constructor.toArray(sanitized);
  }

  get review() {
    let value = this[review];
    return this.constructor.fromArray(value);
  }  set seller(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[seller] = this.constructor.toArray(sanitized);
  }

  get seller() {
    let value = this[seller];
    return this.constructor.fromArray(value);
  }  set serialNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[serialNumber] = this.constructor.toArray(sanitized);
  }

  get serialNumber() {
    let value = this[serialNumber];
    return this.constructor.fromArray(value);
  }  set sku(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[sku] = this.constructor.toArray(sanitized);
  }

  get sku() {
    let value = this[sku];
    return this.constructor.fromArray(value);
  }  set validFrom(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[validFrom] = this.constructor.toArray(sanitized);
  }

  get validFrom() {
    let value = this[validFrom];
    return this.constructor.fromArray(value);
  }  set validThrough(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[validThrough] = this.constructor.toArray(sanitized);
  }

  get validThrough() {
    let value = this[validThrough];
    return this.constructor.fromArray(value);
  }  set warranty(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'WarrantyPromise');
    this[warranty] = this.constructor.toArray(sanitized);
  }

  get warranty() {
    let value = this[warranty];
    return this.constructor.fromArray(value);
  }

}

export default Offer;
