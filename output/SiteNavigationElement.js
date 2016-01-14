/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import WebPageElement from './WebPageElement';

const _debug = debug('moshi:classes:SiteNavigationElement');


/**
 * A navigation element of the page.
 */
class SiteNavigationElement extends WebPageElement {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SiteNavigationElement';
  }



}

export default SiteNavigationElement;
