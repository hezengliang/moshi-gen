/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AdministrativeArea from './AdministrativeArea';

const _debug = debug('moshi:classes:Country');


/**
 * A country.
 */
class Country extends AdministrativeArea {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Country';
  }



}

export default Country;
