/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CivicStructure from './CivicStructure';

const _debug = debug('moshi:classes:PlaceOfWorship');


/**
 * Place of worship, such as a church, synagogue, or mosque.
 */
class PlaceOfWorship extends CivicStructure {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PlaceOfWorship';
  }



}

export default PlaceOfWorship;
