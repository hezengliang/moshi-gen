/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TradeAction from './TradeAction';

const _debug = debug('moshi:classes:QuoteAction');


/**
 * An agent quotes/estimates/appraises an object/product/service with a price at a location/store.
 */
class QuoteAction extends TradeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'QuoteAction';
  }



}

export default QuoteAction;
