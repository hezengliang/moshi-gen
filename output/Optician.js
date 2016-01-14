/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalOrganization from './MedicalOrganization';

const _debug = debug('moshi:classes:Optician');


/**
 * A store that sells reading glasses and similar devices for improving vision.
 */
class Optician extends MedicalOrganization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Optician';
  }



}

export default Optician;
