/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PublicationEvent from './PublicationEvent';

const _debug = debug('moshi:classes:OnDemandEvent');


/**
 * A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.
 */
class OnDemandEvent extends PublicationEvent {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'OnDemandEvent';
  }



}

export default OnDemandEvent;
