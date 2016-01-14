/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import AchieveAction from './AchieveAction';

const _debug = debug('moshi:classes:TieAction');


/**
 * The act of reaching a draw in a competitive activity.
 */
class TieAction extends AchieveAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TieAction';
  }



}

export default TieAction;
