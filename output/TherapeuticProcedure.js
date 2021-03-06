/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalProcedure from './MedicalProcedure';

const _debug = debug('moshi:classes:TherapeuticProcedure');


/**
 * A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition.
 */
class TherapeuticProcedure extends MedicalProcedure {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TherapeuticProcedure';
  }



}

export default TherapeuticProcedure;
