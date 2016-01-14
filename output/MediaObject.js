/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:MediaObject');
const associatedArticle = Symbol.for('associatedArticle');
const bitrate = Symbol.for('bitrate');
const contentSize = Symbol.for('contentSize');
const contentUrl = Symbol.for('contentUrl');
const duration = Symbol.for('duration');
const embedUrl = Symbol.for('embedUrl');
const encodesCreativeWork = Symbol.for('encodesCreativeWork');
const encodingFormat = Symbol.for('encodingFormat');
const expires = Symbol.for('expires');
const height = Symbol.for('height');
const playerType = Symbol.for('playerType');
const productionCompany = Symbol.for('productionCompany');
const regionsAllowed = Symbol.for('regionsAllowed');
const requiresSubscription = Symbol.for('requiresSubscription');
const uploadDate = Symbol.for('uploadDate');
const width = Symbol.for('width');


/**
 * An image, video, or audio object embedded in a web page. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).
 */
class MediaObject extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MediaObject';
  }

  set associatedArticle(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'NewsArticle');
    this[associatedArticle] = this.constructor.toArray(sanitized);
  }

  get associatedArticle() {
    let value = this[associatedArticle];
    return this.constructor.fromArray(value);
  }  set bitrate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[bitrate] = this.constructor.toArray(sanitized);
  }

  get bitrate() {
    let value = this[bitrate];
    return this.constructor.fromArray(value);
  }  set contentSize(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[contentSize] = this.constructor.toArray(sanitized);
  }

  get contentSize() {
    let value = this[contentSize];
    return this.constructor.fromArray(value);
  }  set contentUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[contentUrl] = this.constructor.toArray(sanitized);
  }

  get contentUrl() {
    let value = this[contentUrl];
    return this.constructor.fromArray(value);
  }  set duration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[duration] = this.constructor.toArray(sanitized);
  }

  get duration() {
    let value = this[duration];
    return this.constructor.fromArray(value);
  }  set embedUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[embedUrl] = this.constructor.toArray(sanitized);
  }

  get embedUrl() {
    let value = this[embedUrl];
    return this.constructor.fromArray(value);
  }  set encodesCreativeWork(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[encodesCreativeWork] = this.constructor.toArray(sanitized);
  }

  get encodesCreativeWork() {
    let value = this[encodesCreativeWork];
    return this.constructor.fromArray(value);
  }  set encodingFormat(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[encodingFormat] = this.constructor.toArray(sanitized);
  }

  get encodingFormat() {
    let value = this[encodingFormat];
    return this.constructor.fromArray(value);
  }  set expires(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[expires] = this.constructor.toArray(sanitized);
  }

  get expires() {
    let value = this[expires];
    return this.constructor.fromArray(value);
  }  set height(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue','Distance');
    this[height] = this.constructor.toArray(sanitized);
  }

  get height() {
    let value = this[height];
    return this.constructor.fromArray(value);
  }  set playerType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[playerType] = this.constructor.toArray(sanitized);
  }

  get playerType() {
    let value = this[playerType];
    return this.constructor.fromArray(value);
  }  set productionCompany(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[productionCompany] = this.constructor.toArray(sanitized);
  }

  get productionCompany() {
    let value = this[productionCompany];
    return this.constructor.fromArray(value);
  }  set regionsAllowed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[regionsAllowed] = this.constructor.toArray(sanitized);
  }

  get regionsAllowed() {
    let value = this[regionsAllowed];
    return this.constructor.fromArray(value);
  }  set requiresSubscription(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Boolean');
    this[requiresSubscription] = this.constructor.toArray(sanitized);
  }

  get requiresSubscription() {
    let value = this[requiresSubscription];
    return this.constructor.fromArray(value);
  }  set uploadDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[uploadDate] = this.constructor.toArray(sanitized);
  }

  get uploadDate() {
    let value = this[uploadDate];
    return this.constructor.fromArray(value);
  }  set width(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue','Distance');
    this[width] = this.constructor.toArray(sanitized);
  }

  get width() {
    let value = this[width];
    return this.constructor.fromArray(value);
  }

}

export default MediaObject;
