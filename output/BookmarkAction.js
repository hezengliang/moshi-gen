/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import OrganizeAction from './OrganizeAction';

const _debug = debug('moshi:classes:BookmarkAction');


/**
 * An agent bookmarks/flags/labels/tags/marks an object.
 */
class BookmarkAction extends OrganizeAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BookmarkAction';
  }



}

export default BookmarkAction;
