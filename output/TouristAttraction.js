/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Place from './Place';

const _debug = debug('moshi:classes:TouristAttraction');


/**
 * A tourist attraction.
 */
class TouristAttraction extends Place {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TouristAttraction';
  }



}

export default TouristAttraction;
