/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import LocalBusiness from './LocalBusiness';

const _debug = debug('moshi:classes:ProfessionalService');


/**
 * Original definition: "provider of professional services." The general ProfessionalService type for local businesses was deprecated due to confusion with Service. For reference, the types that it included were: Dentist, AccountingService, Attorney, Notary, as well as types for several kinds of HomeAndConstructionBusiness: Electrician, GeneralContractor, HousePainter, Locksmith, Plumber, RoofingContractor. LegalService was introduced as a more inclusive supertype of Attorney.
 */
class ProfessionalService extends LocalBusiness {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ProfessionalService';
  }



}

export default ProfessionalService;
