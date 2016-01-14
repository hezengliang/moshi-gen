/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import FoodEstablishment from './FoodEstablishment';

const _debug = debug('moshi:classes:Brewery');


/**
 * Brewery.
 */
class Brewery extends FoodEstablishment {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Brewery';
  }



}

export default Brewery;
