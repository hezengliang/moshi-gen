/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreateAction from './CreateAction';

const _debug = debug('moshi:classes:PaintAction');


/**
 * The act of producing a painting, typically with paint and canvas as instruments.
 */
class PaintAction extends CreateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PaintAction';
  }



}

export default PaintAction;
