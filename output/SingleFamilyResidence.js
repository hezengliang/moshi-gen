/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Residence from './Residence';

const _debug = debug('moshi:classes:SingleFamilyResidence');


/**
 * Residence type: Single-family home.
 */
class SingleFamilyResidence extends Residence {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SingleFamilyResidence';
  }



}

export default SingleFamilyResidence;
