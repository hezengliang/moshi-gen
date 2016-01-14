/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalEnumeration from './MedicalEnumeration';

const _debug = debug('moshi:classes:MedicalImagingTechnique');


/**
 * Any medical imaging modality typically used for diagnostic purposes. Enumerated type.
 */
class MedicalImagingTechnique extends MedicalEnumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalImagingTechnique';
  }



}

export default MedicalImagingTechnique;
