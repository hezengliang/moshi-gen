/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWorkSeries from './CreativeWorkSeries';

const _debug = debug('moshi:classes:BookSeries');


/**
 * A series of books. Included books can be indicated with the hasPart property.
 */
class BookSeries extends CreativeWorkSeries {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BookSeries';
  }



}

export default BookSeries;
