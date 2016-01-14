/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Store from './Store';

const _debug = debug('moshi:classes:PawnShop');


/**
 * A shop that will buy, or lend money against the security of, personal possessions.
 */
class PawnShop extends Store {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PawnShop';
  }



}

export default PawnShop;
