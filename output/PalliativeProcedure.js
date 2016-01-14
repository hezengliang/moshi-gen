/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalProcedure from './MedicalProcedure';

const _debug = debug('moshi:classes:PalliativeProcedure');


/**
 * A medical procedure intended primarily for palliative purposes, aimed at relieving the symptoms of an underlying health condition.
 */
class PalliativeProcedure extends MedicalProcedure {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'PalliativeProcedure';
  }



}

export default PalliativeProcedure;
