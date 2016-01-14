/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:VisualArtwork');
const artEdition = Symbol.for('artEdition');
const artMedium = Symbol.for('artMedium');
const artform = Symbol.for('artform');
const artworkSurface = Symbol.for('artworkSurface');
const depth = Symbol.for('depth');
const height = Symbol.for('height');
const width = Symbol.for('width');


/**
 * A work of art that is primarily visual in character.
 */
class VisualArtwork extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'VisualArtwork';
  }

  set artEdition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Integer','Text');
    this[artEdition] = this.constructor.toArray(sanitized);
  }

  get artEdition() {
    let value = this[artEdition];
    return this.constructor.fromArray(value);
  }  set artMedium(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[artMedium] = this.constructor.toArray(sanitized);
  }

  get artMedium() {
    let value = this[artMedium];
    return this.constructor.fromArray(value);
  }  set artform(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[artform] = this.constructor.toArray(sanitized);
  }

  get artform() {
    let value = this[artform];
    return this.constructor.fromArray(value);
  }  set artworkSurface(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[artworkSurface] = this.constructor.toArray(sanitized);
  }

  get artworkSurface() {
    let value = this[artworkSurface];
    return this.constructor.fromArray(value);
  }  set depth(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue','Distance');
    this[depth] = this.constructor.toArray(sanitized);
  }

  get depth() {
    let value = this[depth];
    return this.constructor.fromArray(value);
  }  set height(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue','Distance');
    this[height] = this.constructor.toArray(sanitized);
  }

  get height() {
    let value = this[height];
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

export default VisualArtwork;
