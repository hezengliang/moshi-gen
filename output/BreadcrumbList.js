/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import ItemList from './ItemList';

const _debug = debug('moshi:classes:BreadcrumbList');


/**
 * A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page. The 'position' property is used to reconstruct the order of the items in a BreadcrumbList. The convention is that a breadcrumb list has an itemListOrder of ItemListOrderAscending (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.
 */
class BreadcrumbList extends ItemList {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'BreadcrumbList';
  }



}

export default BreadcrumbList;
