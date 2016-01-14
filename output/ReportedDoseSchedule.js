/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import DoseSchedule from './DoseSchedule';

const _debug = debug('moshi:classes:ReportedDoseSchedule');


/**
 * A patient-reported or observed dosing schedule for a drug or supplement.
 */
class ReportedDoseSchedule extends DoseSchedule {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ReportedDoseSchedule';
  }



}

export default ReportedDoseSchedule;
