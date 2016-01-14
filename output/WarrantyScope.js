/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Enumeration from './Enumeration';

const _debug = debug('moshi:classes:WarrantyScope');


/**
 * A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product. Commonly used values: http://purl.org/goodrelations/v1#Labor-BringIn http://purl.org/goodrelations/v1#PartsAndLabor-BringIn http://purl.org/goodrelations/v1#PartsAndLabor-PickUp
 */
class WarrantyScope extends Enumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'WarrantyScope';
  }



}

export default WarrantyScope;
