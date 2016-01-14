/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:CreativeWorkSeries');
const endDate = Symbol.for('endDate');
const startDate = Symbol.for('startDate');


/**
 * A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike ItemList which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games). Specific subtypes are available for describing TVSeries, RadioSeries, MovieSeries, BookSeries, Periodical and VideoGameSeries. In each case, the hasPart / isPartOf properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes. It is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.
 */
class CreativeWorkSeries extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'CreativeWorkSeries';
  }

  set endDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[endDate] = this.constructor.toArray(sanitized);
  }

  get endDate() {
    let value = this[endDate];
    return this.constructor.fromArray(value);
  }  set startDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[startDate] = this.constructor.toArray(sanitized);
  }

  get startDate() {
    let value = this[startDate];
    return this.constructor.fromArray(value);
  }

}

export default CreativeWorkSeries;
