/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import WebPage from './WebPage';

const _debug = debug('moshi:classes:MedicalWebPage');
const aspect = Symbol.for('aspect');


/**
 * A web page that provides medical information.
 */
class MedicalWebPage extends WebPage {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'MedicalWebPage';
  }

  set aspect(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[aspect] = this.constructor.toArray(sanitized);
  }

  get aspect() {
    let value = this[aspect];
    return this.constructor.fromArray(value);
  }

}

export default MedicalWebPage;
