/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import SportsActivityLocation from './SportsActivityLocation';

const _debug = debug('moshi:classes:GolfCourse');


/**
 * A golf course.
 */
class GolfCourse extends SportsActivityLocation {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'GolfCourse';
  }



}

export default GolfCourse;
