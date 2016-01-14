/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Enumeration from './Enumeration';

const _debug = debug('moshi:classes:PaymentMethod');


/**
 * A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction. Commonly used values: http://purl.org/goodrelations/v1#ByBankTransferInAdvance http://purl.org/goodrelations/v1#ByInvoice http://purl.org/goodrelations/v1#Cash http://purl.org/goodrelations/v1#CheckInAdvance http://purl.org/goodrelations/v1#COD http://purl.org/goodrelations/v1#DirectDebit http://purl.org/goodrelations/v1#GoogleCheckout http://purl.org/goodrelations/v1#PayPal http://purl.org/goodrelations/v1#PaySwarm
 */
class PaymentMethod extends Enumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PaymentMethod';
  }



}

export default PaymentMethod;
