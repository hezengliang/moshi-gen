/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Episode from './Episode';

const _debug = debug('moshi:classes:TVEpisode');
const countryOfOrigin = Symbol.for('countryOfOrigin');
const subtitleLanguage = Symbol.for('subtitleLanguage');


/**
 * A TV episode which can be part of a series or season.
 */
class TVEpisode extends Episode {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TVEpisode';
  }

  set countryOfOrigin(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Country');
    this[countryOfOrigin] = this.constructor.toArray(sanitized);
  }

  get countryOfOrigin() {
    let value = this[countryOfOrigin];
    return this.constructor.fromArray(value);
  }  set subtitleLanguage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Language','Text');
    this[subtitleLanguage] = this.constructor.toArray(sanitized);
  }

  get subtitleLanguage() {
    let value = this[subtitleLanguage];
    return this.constructor.fromArray(value);
  }

}

export default TVEpisode;
