/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Enumeration from './Enumeration';

const _debug = debug('moshi:classes:DayOfWeek');


/**
 * The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer. Commonly used values: http://purl.org/goodrelations/v1#Monday http://purl.org/goodrelations/v1#Tuesday http://purl.org/goodrelations/v1#Wednesday http://purl.org/goodrelations/v1#Thursday http://purl.org/goodrelations/v1#Friday http://purl.org/goodrelations/v1#Saturday http://purl.org/goodrelations/v1#Sunday http://purl.org/goodrelations/v1#PublicHolidays
 */
class DayOfWeek extends Enumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DayOfWeek';
  }



}

export default DayOfWeek;
