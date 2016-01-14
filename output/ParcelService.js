/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import DeliveryMethod from './DeliveryMethod';

const _debug = debug('moshi:classes:ParcelService');


/**
 * A private parcel service as the delivery mode available for a certain offer. Commonly used values: http://purl.org/goodrelations/v1#DHL http://purl.org/goodrelations/v1#FederalExpress http://purl.org/goodrelations/v1#UPS
 */
class ParcelService extends DeliveryMethod {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ParcelService';
  }



}

export default ParcelService;
