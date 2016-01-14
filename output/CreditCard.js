/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PaymentMethod from './PaymentMethod';

const _debug = debug('moshi:classes:CreditCard');


/**
 * A credit or debit card type as a standardized procedure for transferring the monetary amount for a purchase. Commonly used values: http://purl.org/goodrelations/v1#AmericanExpress http://purl.org/goodrelations/v1#DinersClub http://purl.org/goodrelations/v1#Discover http://purl.org/goodrelations/v1#JCB http://purl.org/goodrelations/v1#MasterCard http://purl.org/goodrelations/v1#VISA
 */
class CreditCard extends PaymentMethod {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CreditCard';
  }



}

export default CreditCard;
