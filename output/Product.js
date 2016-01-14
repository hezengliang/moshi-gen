/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Thing from './Thing';

const _debug = debug('moshi:classes:Product');
const additionalProperty = Symbol.for('additionalProperty');
const aggregateRating = Symbol.for('aggregateRating');
const audience = Symbol.for('audience');
const award = Symbol.for('award');
const brand = Symbol.for('brand');
const category = Symbol.for('category');
const color = Symbol.for('color');
const depth = Symbol.for('depth');
const gtin12 = Symbol.for('gtin12');
const gtin13 = Symbol.for('gtin13');
const gtin14 = Symbol.for('gtin14');
const gtin8 = Symbol.for('gtin8');
const height = Symbol.for('height');
const isAccessoryOrSparePartFor = Symbol.for('isAccessoryOrSparePartFor');
const isConsumableFor = Symbol.for('isConsumableFor');
const isRelatedTo = Symbol.for('isRelatedTo');
const isSimilarTo = Symbol.for('isSimilarTo');
const itemCondition = Symbol.for('itemCondition');
const logo = Symbol.for('logo');
const manufacturer = Symbol.for('manufacturer');
const model = Symbol.for('model');
const mpn = Symbol.for('mpn');
const offers = Symbol.for('offers');
const productID = Symbol.for('productID');
const productionDate = Symbol.for('productionDate');
const purchaseDate = Symbol.for('purchaseDate');
const releaseDate = Symbol.for('releaseDate');
const review = Symbol.for('review');
const sku = Symbol.for('sku');
const weight = Symbol.for('weight');
const width = Symbol.for('width');


/**
 * Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.
 */
class Product extends Thing {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Product';
  }

  set additionalProperty(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'PropertyValue');
    this[additionalProperty] = this.constructor.toArray(sanitized);
  }

  get additionalProperty() {
    let value = this[additionalProperty];
    return this.constructor.fromArray(value);
  }  set aggregateRating(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AggregateRating');
    this[aggregateRating] = this.constructor.toArray(sanitized);
  }

  get aggregateRating() {
    let value = this[aggregateRating];
    return this.constructor.fromArray(value);
  }  set audience(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Audience');
    this[audience] = this.constructor.toArray(sanitized);
  }

  get audience() {
    let value = this[audience];
    return this.constructor.fromArray(value);
  }  set award(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[award] = this.constructor.toArray(sanitized);
  }

  get award() {
    let value = this[award];
    return this.constructor.fromArray(value);
  }  set brand(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization','Brand');
    this[brand] = this.constructor.toArray(sanitized);
  }

  get brand() {
    let value = this[brand];
    return this.constructor.fromArray(value);
  }  set category(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','PhysicalActivityCategory','Thing');
    this[category] = this.constructor.toArray(sanitized);
  }

  get category() {
    let value = this[category];
    return this.constructor.fromArray(value);
  }  set color(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[color] = this.constructor.toArray(sanitized);
  }

  get color() {
    let value = this[color];
    return this.constructor.fromArray(value);
  }  set depth(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Distance','QuantitativeValue');
    this[depth] = this.constructor.toArray(sanitized);
  }

  get depth() {
    let value = this[depth];
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
  }  set height(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Distance','QuantitativeValue');
    this[height] = this.constructor.toArray(sanitized);
  }

  get height() {
    let value = this[height];
    return this.constructor.fromArray(value);
  }  set isAccessoryOrSparePartFor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Product');
    this[isAccessoryOrSparePartFor] = this.constructor.toArray(sanitized);
  }

  get isAccessoryOrSparePartFor() {
    let value = this[isAccessoryOrSparePartFor];
    return this.constructor.fromArray(value);
  }  set isConsumableFor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Product');
    this[isConsumableFor] = this.constructor.toArray(sanitized);
  }

  get isConsumableFor() {
    let value = this[isConsumableFor];
    return this.constructor.fromArray(value);
  }  set isRelatedTo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Product');
    this[isRelatedTo] = this.constructor.toArray(sanitized);
  }

  get isRelatedTo() {
    let value = this[isRelatedTo];
    return this.constructor.fromArray(value);
  }  set isSimilarTo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Product');
    this[isSimilarTo] = this.constructor.toArray(sanitized);
  }

  get isSimilarTo() {
    let value = this[isSimilarTo];
    return this.constructor.fromArray(value);
  }  set itemCondition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'OfferItemCondition');
    this[itemCondition] = this.constructor.toArray(sanitized);
  }

  get itemCondition() {
    let value = this[itemCondition];
    return this.constructor.fromArray(value);
  }  set logo(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ImageObject','URL');
    this[logo] = this.constructor.toArray(sanitized);
  }

  get logo() {
    let value = this[logo];
    return this.constructor.fromArray(value);
  }  set manufacturer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[manufacturer] = this.constructor.toArray(sanitized);
  }

  get manufacturer() {
    let value = this[manufacturer];
    return this.constructor.fromArray(value);
  }  set model(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ProductModel','Text');
    this[model] = this.constructor.toArray(sanitized);
  }

  get model() {
    let value = this[model];
    return this.constructor.fromArray(value);
  }  set mpn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[mpn] = this.constructor.toArray(sanitized);
  }

  get mpn() {
    let value = this[mpn];
    return this.constructor.fromArray(value);
  }  set offers(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Offer');
    this[offers] = this.constructor.toArray(sanitized);
  }

  get offers() {
    let value = this[offers];
    return this.constructor.fromArray(value);
  }  set productID(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[productID] = this.constructor.toArray(sanitized);
  }

  get productID() {
    let value = this[productID];
    return this.constructor.fromArray(value);
  }  set productionDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[productionDate] = this.constructor.toArray(sanitized);
  }

  get productionDate() {
    let value = this[productionDate];
    return this.constructor.fromArray(value);
  }  set purchaseDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[purchaseDate] = this.constructor.toArray(sanitized);
  }

  get purchaseDate() {
    let value = this[purchaseDate];
    return this.constructor.fromArray(value);
  }  set releaseDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[releaseDate] = this.constructor.toArray(sanitized);
  }

  get releaseDate() {
    let value = this[releaseDate];
    return this.constructor.fromArray(value);
  }  set review(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Review');
    this[review] = this.constructor.toArray(sanitized);
  }

  get review() {
    let value = this[review];
    return this.constructor.fromArray(value);
  }  set sku(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[sku] = this.constructor.toArray(sanitized);
  }

  get sku() {
    let value = this[sku];
    return this.constructor.fromArray(value);
  }  set weight(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[weight] = this.constructor.toArray(sanitized);
  }

  get weight() {
    let value = this[weight];
    return this.constructor.fromArray(value);
  }  set width(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Distance','QuantitativeValue');
    this[width] = this.constructor.toArray(sanitized);
  }

  get width() {
    let value = this[width];
    return this.constructor.fromArray(value);
  }

}

export default Product;
