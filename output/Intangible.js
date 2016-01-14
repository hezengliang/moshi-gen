/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Thing from './Thing';

const _debug = debug('moshi:classes:Intangible');


/**
 * A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
 */
class Intangible extends Thing {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Intangible';
  }



}

export default Intangible;
