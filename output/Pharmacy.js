/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalOrganization from './MedicalOrganization';

const _debug = debug('moshi:classes:Pharmacy');


/**
 * A pharmacy or drugstore.
 */
class Pharmacy extends MedicalOrganization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Pharmacy';
  }



}

export default Pharmacy;
