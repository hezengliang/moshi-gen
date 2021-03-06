/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import WebPage from './WebPage';

const _debug = debug('moshi:classes:ContactPage');


/**
 * Web page type: Contact page.
 */
class ContactPage extends WebPage {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ContactPage';
  }



}

export default ContactPage;
