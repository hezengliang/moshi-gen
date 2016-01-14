/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import LifestyleModification from './LifestyleModification';

const _debug = debug('moshi:classes:PhysicalActivity');
const associatedAnatomy = Symbol.for('associatedAnatomy');
const category = Symbol.for('category');
const epidemiology = Symbol.for('epidemiology');
const pathophysiology = Symbol.for('pathophysiology');


/**
 * Any bodily activity that enhances or maintains physical fitness and overall health and wellness. Includes activity that is part of daily living and routine, structured exercise, and exercise prescribed as part of a medical treatment or recovery plan.
 */
class PhysicalActivity extends LifestyleModification {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PhysicalActivity';
  }

  set associatedAnatomy(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AnatomicalSystem','SuperficialAnatomy','AnatomicalStructure');
    this[associatedAnatomy] = this.constructor.toArray(sanitized);
  }

  get associatedAnatomy() {
    let value = this[associatedAnatomy];
    return this.constructor.fromArray(value);
  }  set category(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','PhysicalActivityCategory','Thing');
    this[category] = this.constructor.toArray(sanitized);
  }

  get category() {
    let value = this[category];
    return this.constructor.fromArray(value);
  }  set epidemiology(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[epidemiology] = this.constructor.toArray(sanitized);
  }

  get epidemiology() {
    let value = this[epidemiology];
    return this.constructor.fromArray(value);
  }  set pathophysiology(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[pathophysiology] = this.constructor.toArray(sanitized);
  }

  get pathophysiology() {
    let value = this[pathophysiology];
    return this.constructor.fromArray(value);
  }

}

export default PhysicalActivity;
