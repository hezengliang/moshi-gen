/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Article from './Article';

const _debug = debug('moshi:classes:TechArticle');
const dependencies = Symbol.for('dependencies');
const proficiencyLevel = Symbol.for('proficiencyLevel');


/**
 * A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.
 */
class TechArticle extends Article {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'TechArticle';
  }

  set dependencies(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[dependencies] = this.constructor.toArray(sanitized);
  }

  get dependencies() {
    let value = this[dependencies];
    return this.constructor.fromArray(value);
  }  set proficiencyLevel(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[proficiencyLevel] = this.constructor.toArray(sanitized);
  }

  get proficiencyLevel() {
    let value = this[proficiencyLevel];
    return this.constructor.fromArray(value);
  }

}

export default TechArticle;
