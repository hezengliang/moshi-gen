/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWorkSeries from './CreativeWorkSeries';

const _debug = debug('moshi:classes:Periodical');
const issn = Symbol.for('issn');


/**
 * A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely. See also blog post.
 */
class Periodical extends CreativeWorkSeries {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Periodical';
  }

  set issn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[issn] = this.constructor.toArray(sanitized);
  }

  get issn() {
    let value = this[issn];
    return this.constructor.fromArray(value);
  }

}

export default Periodical;
