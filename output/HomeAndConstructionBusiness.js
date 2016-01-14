/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import LocalBusiness from './LocalBusiness';

const _debug = debug('moshi:classes:HomeAndConstructionBusiness');


/**
 * A construction business. A HomeAndConstructionBusiness is a LocalBusiness that provides services around homes and buildings. As a LocalBusiness it can be described as a provider of one or more Service(s).
 */
class HomeAndConstructionBusiness extends LocalBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'HomeAndConstructionBusiness';
  }



}

export default HomeAndConstructionBusiness;
