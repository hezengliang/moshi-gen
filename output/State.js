/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AdministrativeArea from './AdministrativeArea';

const _debug = debug('moshi:classes:State');


/**
 * A state or province of a country.
 */
class State extends AdministrativeArea {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'State';
  }



}

export default State;
