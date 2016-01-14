/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Enumeration from './Enumeration';

const _debug = debug('moshi:classes:BusinessEntityType');


/**
 * A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person. Commonly used values: http://purl.org/goodrelations/v1#Business http://purl.org/goodrelations/v1#Enduser http://purl.org/goodrelations/v1#PublicInstitution http://purl.org/goodrelations/v1#Reseller
 */
class BusinessEntityType extends Enumeration {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BusinessEntityType';
  }



}

export default BusinessEntityType;
