/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import FinancialService from './FinancialService';

const _debug = debug('moshi:classes:AccountingService');


/**
 * Accountancy business. As a LocalBusiness it can be described as a provider of one or more Service(s).
 */
class AccountingService extends FinancialService {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'AccountingService';
  }



}

export default AccountingService;