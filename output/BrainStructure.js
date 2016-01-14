/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AnatomicalStructure from './AnatomicalStructure';

const _debug = debug('moshi:classes:BrainStructure');


/**
 * Any anatomical structure which pertains to the soft nervous tissue functioning as the coordinating center of sensation and intellectual and nervous activity.
 */
class BrainStructure extends AnatomicalStructure {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BrainStructure';
  }



}

export default BrainStructure;
