/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Store from './Store';

const _debug = debug('moshi:classes:HomeGoodsStore');


/**
 * A home goods store.
 */
class HomeGoodsStore extends Store {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'HomeGoodsStore';
  }



}

export default HomeGoodsStore;
