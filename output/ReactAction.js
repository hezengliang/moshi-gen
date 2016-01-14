/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AssessAction from './AssessAction';

const _debug = debug('moshi:classes:ReactAction');


/**
 * The act of responding instinctively and emotionally to an object, expressing a sentiment.
 */
class ReactAction extends AssessAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ReactAction';
  }



}

export default ReactAction;
