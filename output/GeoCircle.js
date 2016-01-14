/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import GeoShape from './GeoShape';

const _debug = debug('moshi:classes:GeoCircle');
const geoMidpoint = Symbol.for('geoMidpoint');
const geoRadius = Symbol.for('geoRadius');


/**
 * A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius. The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.
 */
class GeoCircle extends GeoShape {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'GeoCircle';
  }

  set geoMidpoint(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'GeoCoordinates');
    this[geoMidpoint] = this.constructor.toArray(sanitized);
  }

  get geoMidpoint() {
    let value = this[geoMidpoint];
    return this.constructor.fromArray(value);
  }  set geoRadius(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Distance','Number','Text');
    this[geoRadius] = this.constructor.toArray(sanitized);
  }

  get geoRadius() {
    let value = this[geoRadius];
    return this.constructor.fromArray(value);
  }

}

export default GeoCircle;
