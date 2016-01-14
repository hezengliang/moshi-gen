/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import LodgingBusiness from './LodgingBusiness';

const _debug = debug('moshi:classes:Hostel');


/**
 * A hostel - cheap accommodation, often in shared dormitories.
 */
class Hostel extends LodgingBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Hostel';
  }



}

export default Hostel;
