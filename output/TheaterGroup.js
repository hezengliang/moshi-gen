/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PerformingGroup from './PerformingGroup';

const _debug = debug('moshi:classes:TheaterGroup');


/**
 * A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.
 */
class TheaterGroup extends PerformingGroup {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TheaterGroup';
  }



}

export default TheaterGroup;
