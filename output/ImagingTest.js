/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalTest from './MedicalTest';

const _debug = debug('moshi:classes:ImagingTest');
const imagingTechnique = Symbol.for('imagingTechnique');


/**
 * Any medical imaging modality typically used for diagnostic purposes.
 */
class ImagingTest extends MedicalTest {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ImagingTest';
  }

  set imagingTechnique(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'MedicalImagingTechnique');
    this[imagingTechnique] = this.constructor.toArray(sanitized);
  }

  get imagingTechnique() {
    let value = this[imagingTechnique];
    return this.constructor.fromArray(value);
  }

}

export default ImagingTest;
