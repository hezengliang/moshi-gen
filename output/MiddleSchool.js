/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import EducationalOrganization from './EducationalOrganization';

const _debug = debug('moshi:classes:MiddleSchool');


/**
 * A middle school (typically for children aged around 11-14, although this varies somewhat).
 */
class MiddleSchool extends EducationalOrganization {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MiddleSchool';
  }



}

export default MiddleSchool;
