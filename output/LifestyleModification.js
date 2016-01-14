/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalTherapy from './MedicalTherapy';

const _debug = debug('moshi:classes:LifestyleModification');


/**
 * A process of care involving exercise, changes to diet, fitness routines, and other lifestyle changes aimed at improving a health condition.
 */
class LifestyleModification extends MedicalTherapy {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'LifestyleModification';
  }



}

export default LifestyleModification;
