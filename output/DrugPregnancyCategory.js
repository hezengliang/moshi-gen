/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Enumeration from './Enumeration';

const _debug = debug('moshi:classes:DrugPregnancyCategory');


/**
 * Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy.
 */
class DrugPregnancyCategory extends Enumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DrugPregnancyCategory';
  }



}

export default DrugPregnancyCategory;
