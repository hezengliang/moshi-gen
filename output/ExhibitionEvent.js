/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Event from './Event';

const _debug = debug('moshi:classes:ExhibitionEvent');


/**
 * Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ...
 */
class ExhibitionEvent extends Event {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ExhibitionEvent';
  }



}

export default ExhibitionEvent;
