/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWorkSeason from './CreativeWorkSeason';

const _debug = debug('moshi:classes:RadioSeason');


/**
 * Season dedicated to radio broadcast and associated online delivery.
 */
class RadioSeason extends CreativeWorkSeason {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'RadioSeason';
  }



}

export default RadioSeason;
