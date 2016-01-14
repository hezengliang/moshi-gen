/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Thing from './Thing';

const _debug = debug('moshi:classes:Event');
const aggregateRating = Symbol.for('aggregateRating');
const attendee = Symbol.for('attendee');
const doorTime = Symbol.for('doorTime');
const duration = Symbol.for('duration');
const endDate = Symbol.for('endDate');
const eventStatus = Symbol.for('eventStatus');
const inLanguage = Symbol.for('inLanguage');
const location = Symbol.for('location');
const offers = Symbol.for('offers');
const organizer = Symbol.for('organizer');
const performer = Symbol.for('performer');
const previousStartDate = Symbol.for('previousStartDate');
const recordedIn = Symbol.for('recordedIn');
const review = Symbol.for('review');
const startDate = Symbol.for('startDate');
const subEvent = Symbol.for('subEvent');
const superEvent = Symbol.for('superEvent');
const typicalAgeRange = Symbol.for('typicalAgeRange');
const workFeatured = Symbol.for('workFeatured');
const workPerformed = Symbol.for('workPerformed');


/**
 * An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the 'offers' property. Repeated events may be structured as separate Event objects.
 */
class Event extends Thing {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Event';
  }

  set aggregateRating(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'AggregateRating');
    this[aggregateRating] = this.constructor.toArray(sanitized);
  }

  get aggregateRating() {
    let value = this[aggregateRating];
    return this.constructor.fromArray(value);
  }  set attendee(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[attendee] = this.constructor.toArray(sanitized);
  }

  get attendee() {
    let value = this[attendee];
    return this.constructor.fromArray(value);
  }  set doorTime(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DateTime');
    this[doorTime] = this.constructor.toArray(sanitized);
  }

  get doorTime() {
    let value = this[doorTime];
    return this.constructor.fromArray(value);
  }  set duration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Duration');
    this[duration] = this.constructor.toArray(sanitized);
  }

  get duration() {
    let value = this[duration];
    return this.constructor.fromArray(value);
  }  set endDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[endDate] = this.constructor.toArray(sanitized);
  }

  get endDate() {
    let value = this[endDate];
    return this.constructor.fromArray(value);
  }  set eventStatus(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'EventStatusType');
    this[eventStatus] = this.constructor.toArray(sanitized);
  }

  get eventStatus() {
    let value = this[eventStatus];
    return this.constructor.fromArray(value);
  }  set inLanguage(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','Language');
    this[inLanguage] = this.constructor.toArray(sanitized);
  }

  get inLanguage() {
    let value = this[inLanguage];
    return this.constructor.fromArray(value);
  }  set location(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','PostalAddress','Place');
    this[location] = this.constructor.toArray(sanitized);
  }

  get location() {
    let value = this[location];
    return this.constructor.fromArray(value);
  }  set offers(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Offer');
    this[offers] = this.constructor.toArray(sanitized);
  }

  get offers() {
    let value = this[offers];
    return this.constructor.fromArray(value);
  }  set organizer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[organizer] = this.constructor.toArray(sanitized);
  }

  get organizer() {
    let value = this[organizer];
    return this.constructor.fromArray(value);
  }  set performer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Person','Organization');
    this[performer] = this.constructor.toArray(sanitized);
  }

  get performer() {
    let value = this[performer];
    return this.constructor.fromArray(value);
  }  set previousStartDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[previousStartDate] = this.constructor.toArray(sanitized);
  }

  get previousStartDate() {
    let value = this[previousStartDate];
    return this.constructor.fromArray(value);
  }  set recordedIn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[recordedIn] = this.constructor.toArray(sanitized);
  }

  get recordedIn() {
    let value = this[recordedIn];
    return this.constructor.fromArray(value);
  }  set review(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Review');
    this[review] = this.constructor.toArray(sanitized);
  }

  get review() {
    let value = this[review];
    return this.constructor.fromArray(value);
  }  set startDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[startDate] = this.constructor.toArray(sanitized);
  }

  get startDate() {
    let value = this[startDate];
    return this.constructor.fromArray(value);
  }  set subEvent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Event');
    this[subEvent] = this.constructor.toArray(sanitized);
  }

  get subEvent() {
    let value = this[subEvent];
    return this.constructor.fromArray(value);
  }  set superEvent(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Event');
    this[superEvent] = this.constructor.toArray(sanitized);
  }

  get superEvent() {
    let value = this[superEvent];
    return this.constructor.fromArray(value);
  }  set typicalAgeRange(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[typicalAgeRange] = this.constructor.toArray(sanitized);
  }

  get typicalAgeRange() {
    let value = this[typicalAgeRange];
    return this.constructor.fromArray(value);
  }  set workFeatured(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[workFeatured] = this.constructor.toArray(sanitized);
  }

  get workFeatured() {
    let value = this[workFeatured];
    return this.constructor.fromArray(value);
  }  set workPerformed(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[workPerformed] = this.constructor.toArray(sanitized);
  }

  get workPerformed() {
    let value = this[workPerformed];
    return this.constructor.fromArray(value);
  }

}

export default Event;
