/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import EducationalOrganization from './EducationalOrganization';

const _debug = debug('moshi:classes:HighSchool');


/**
 * A high school.
 */
class HighSchool extends EducationalOrganization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'HighSchool';
  }



}

export default HighSchool;
