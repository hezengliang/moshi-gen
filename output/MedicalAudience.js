/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Audience from './Audience';

const _debug = debug('moshi:classes:MedicalAudience');


/**
 * Target audiences for medical web pages. Enumerated type.
 */
class MedicalAudience extends Audience {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalAudience';
  }



}

export default MedicalAudience;
