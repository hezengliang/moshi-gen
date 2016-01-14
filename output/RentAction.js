/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import TradeAction from './TradeAction';

const _debug = debug('moshi:classes:RentAction');
const landlord = Symbol.for('landlord');
const realEstateAgent = Symbol.for('realEstateAgent');


/**
 * The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.
 */
class RentAction extends TradeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'RentAction';
  }

  set landlord(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[landlord] = this.constructor.toArray(sanitized);
  }

  get landlord() {
    let value = this[landlord];
    return this.constructor.fromArray(value);
  }  set realEstateAgent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'RealEstateAgent');
    this[realEstateAgent] = this.constructor.toArray(sanitized);
  }

  get realEstateAgent() {
    let value = this[realEstateAgent];
    return this.constructor.fromArray(value);
  }

}

export default RentAction;
