/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Landform from './Landform';

const _debug = debug('moshi:classes:Continent');


/**
 * One of the continents (for example, Europe or Africa).
 */
class Continent extends Landform {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Continent';
  }



}

export default Continent;
