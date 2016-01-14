/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import LocalBusiness from './LocalBusiness';

const _debug = debug('moshi:classes:LodgingBusiness');


/**
 * A lodging business, such as a motel, hotel, or inn.
 */
class LodgingBusiness extends LocalBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'LodgingBusiness';
  }



}

export default LodgingBusiness;
