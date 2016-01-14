/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Enumeration from './Enumeration';

const _debug = debug('moshi:classes:DeliveryMethod');


/**
 * A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person. Commonly used values: http://purl.org/goodrelations/v1#DeliveryModeDirectDownload http://purl.org/goodrelations/v1#DeliveryModeFreight http://purl.org/goodrelations/v1#DeliveryModeMail http://purl.org/goodrelations/v1#DeliveryModeOwnFleet http://purl.org/goodrelations/v1#DeliveryModePickUp http://purl.org/goodrelations/v1#DHL http://purl.org/goodrelations/v1#FederalExpress http://purl.org/goodrelations/v1#UPS
 */
class DeliveryMethod extends Enumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DeliveryMethod';
  }



}

export default DeliveryMethod;
