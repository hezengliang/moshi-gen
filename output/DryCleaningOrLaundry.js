/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import LocalBusiness from './LocalBusiness';

const _debug = debug('moshi:classes:DryCleaningOrLaundry');


/**
 * A dry-cleaning business.
 */
class DryCleaningOrLaundry extends LocalBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DryCleaningOrLaundry';
  }



}

export default DryCleaningOrLaundry;
