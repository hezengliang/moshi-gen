/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import PlayAction from './PlayAction';

const _debug = debug('moshi:classes:ExerciseAction');
const distance = Symbol.for('distance');
const exerciseCourse = Symbol.for('exerciseCourse');
const exercisePlan = Symbol.for('exercisePlan');
const exerciseRelatedDiet = Symbol.for('exerciseRelatedDiet');
const exerciseType = Symbol.for('exerciseType');
const fromLocation = Symbol.for('fromLocation');
const opponent = Symbol.for('opponent');
const sportsActivityLocation = Symbol.for('sportsActivityLocation');
const sportsEvent = Symbol.for('sportsEvent');
const sportsTeam = Symbol.for('sportsTeam');
const toLocation = Symbol.for('toLocation');


/**
 * The act of participating in exertive activity for the purposes of improving health and fitness.
 */
class ExerciseAction extends PlayAction {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'ExerciseAction';
  }

  set distance(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Distance');
    this[distance] = this.constructor.toArray(sanitized);
  }

  get distance() {
    let value = this[distance];
    return this.constructor.fromArray(value);
  }  set exerciseCourse(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[exerciseCourse] = this.constructor.toArray(sanitized);
  }

  get exerciseCourse() {
    let value = this[exerciseCourse];
    return this.constructor.fromArray(value);
  }  set exercisePlan(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'ExercisePlan');
    this[exercisePlan] = this.constructor.toArray(sanitized);
  }

  get exercisePlan() {
    let value = this[exercisePlan];
    return this.constructor.fromArray(value);
  }  set exerciseRelatedDiet(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Diet');
    this[exerciseRelatedDiet] = this.constructor.toArray(sanitized);
  }

  get exerciseRelatedDiet() {
    let value = this[exerciseRelatedDiet];
    return this.constructor.fromArray(value);
  }  set exerciseType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[exerciseType] = this.constructor.toArray(sanitized);
  }

  get exerciseType() {
    let value = this[exerciseType];
    return this.constructor.fromArray(value);
  }  set fromLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[fromLocation] = this.constructor.toArray(sanitized);
  }

  get fromLocation() {
    let value = this[fromLocation];
    return this.constructor.fromArray(value);
  }  set opponent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person');
    this[opponent] = this.constructor.toArray(sanitized);
  }

  get opponent() {
    let value = this[opponent];
    return this.constructor.fromArray(value);
  }  set sportsActivityLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SportsActivityLocation');
    this[sportsActivityLocation] = this.constructor.toArray(sanitized);
  }

  get sportsActivityLocation() {
    let value = this[sportsActivityLocation];
    return this.constructor.fromArray(value);
  }  set sportsEvent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SportsEvent');
    this[sportsEvent] = this.constructor.toArray(sanitized);
  }

  get sportsEvent() {
    let value = this[sportsEvent];
    return this.constructor.fromArray(value);
  }  set sportsTeam(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SportsTeam');
    this[sportsTeam] = this.constructor.toArray(sanitized);
  }

  get sportsTeam() {
    let value = this[sportsTeam];
    return this.constructor.fromArray(value);
  }  set toLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[toLocation] = this.constructor.toArray(sanitized);
  }

  get toLocation() {
    let value = this[toLocation];
    return this.constructor.fromArray(value);
  }

}

export default ExerciseAction;
