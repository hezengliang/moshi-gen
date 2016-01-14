/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreateAction from './CreateAction';

const _debug = debug('moshi:classes:WriteAction');
const inLanguage = Symbol.for('inLanguage');


/**
 * The act of authoring written creative content.
 */
class WriteAction extends CreateAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'WriteAction';
  }

  set inLanguage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Language','Text');
    this[inLanguage] = this.constructor.toArray(sanitized);
  }

  get inLanguage() {
    let value = this[inLanguage];
    return this.constructor.fromArray(value);
  }

}

export default WriteAction;
