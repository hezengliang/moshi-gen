/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import MedicalProcedure from './MedicalProcedure';

const _debug = debug('moshi:classes:DiagnosticProcedure');


/**
 * A medical procedure intended primarily for diagnostic, as opposed to therapeutic, purposes.
 */
class DiagnosticProcedure extends MedicalProcedure {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'DiagnosticProcedure';
  }



}

export default DiagnosticProcedure;
