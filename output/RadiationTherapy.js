/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalTherapy from './MedicalTherapy';

const _debug = debug('moshi:classes:RadiationTherapy');


/**
 * A process of care using radiation aimed at improving a health condition.
 */
class RadiationTherapy extends MedicalTherapy {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'RadiationTherapy';
  }



}

export default RadiationTherapy;
