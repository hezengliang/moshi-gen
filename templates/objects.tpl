/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import [% superClass %] from './[% superClass %]';

const _debug = debug('moshi:classes:[% selfClass %]');
[% FOREACH attr IN attrs %]const [% attr.name %] = Symbol.for('[% attr.name %]');
[% END %]

/**
 * [% comments %]
 */
class [% selfClass %] extends [% superClass %] {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return '[% selfClass %]';
  }

[% FOREACH attr IN attrs %]  set [% attr.name %](value) {
    let sanitized = this.constructor.sanitizeValue(value, [% attr.types %]);
    this[[% attr.name %]] = this.constructor.toArray(sanitized);
  }

  get [% attr.name %]() {
    let value = this[[% attr.name %]];
    return this.constructor.fromArray(value);
  }[% END %]

}

export default [% selfClass %];
