/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Intangible from './Intangible';

const _debug = debug('moshi:classes:JobPosting');
const baseSalary = Symbol.for('baseSalary');
const datePosted = Symbol.for('datePosted');
const educationRequirements = Symbol.for('educationRequirements');
const employmentType = Symbol.for('employmentType');
const experienceRequirements = Symbol.for('experienceRequirements');
const hiringOrganization = Symbol.for('hiringOrganization');
const incentiveCompensation = Symbol.for('incentiveCompensation');
const industry = Symbol.for('industry');
const jobBenefits = Symbol.for('jobBenefits');
const jobLocation = Symbol.for('jobLocation');
const occupationalCategory = Symbol.for('occupationalCategory');
const qualifications = Symbol.for('qualifications');
const responsibilities = Symbol.for('responsibilities');
const salaryCurrency = Symbol.for('salaryCurrency');
const skills = Symbol.for('skills');
const specialCommitments = Symbol.for('specialCommitments');
const title = Symbol.for('title');
const workHours = Symbol.for('workHours');


/**
 * A listing that describes a job opening in a certain organization.
 */
class JobPosting extends Intangible {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'JobPosting';
  }

  set baseSalary(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','PriceSpecification');
    this[baseSalary] = this.constructor.toArray(sanitized);
  }

  get baseSalary() {
    let value = this[baseSalary];
    return this.constructor.fromArray(value);
  }  set datePosted(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[datePosted] = this.constructor.toArray(sanitized);
  }

  get datePosted() {
    let value = this[datePosted];
    return this.constructor.fromArray(value);
  }  set educationRequirements(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[educationRequirements] = this.constructor.toArray(sanitized);
  }

  get educationRequirements() {
    let value = this[educationRequirements];
    return this.constructor.fromArray(value);
  }  set employmentType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[employmentType] = this.constructor.toArray(sanitized);
  }

  get employmentType() {
    let value = this[employmentType];
    return this.constructor.fromArray(value);
  }  set experienceRequirements(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[experienceRequirements] = this.constructor.toArray(sanitized);
  }

  get experienceRequirements() {
    let value = this[experienceRequirements];
    return this.constructor.fromArray(value);
  }  set hiringOrganization(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Organization');
    this[hiringOrganization] = this.constructor.toArray(sanitized);
  }

  get hiringOrganization() {
    let value = this[hiringOrganization];
    return this.constructor.fromArray(value);
  }  set incentiveCompensation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[incentiveCompensation] = this.constructor.toArray(sanitized);
  }

  get incentiveCompensation() {
    let value = this[incentiveCompensation];
    return this.constructor.fromArray(value);
  }  set industry(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[industry] = this.constructor.toArray(sanitized);
  }

  get industry() {
    let value = this[industry];
    return this.constructor.fromArray(value);
  }  set jobBenefits(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[jobBenefits] = this.constructor.toArray(sanitized);
  }

  get jobBenefits() {
    let value = this[jobBenefits];
    return this.constructor.fromArray(value);
  }  set jobLocation(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Place');
    this[jobLocation] = this.constructor.toArray(sanitized);
  }

  get jobLocation() {
    let value = this[jobLocation];
    return this.constructor.fromArray(value);
  }  set occupationalCategory(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[occupationalCategory] = this.constructor.toArray(sanitized);
  }

  get occupationalCategory() {
    let value = this[occupationalCategory];
    return this.constructor.fromArray(value);
  }  set qualifications(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[qualifications] = this.constructor.toArray(sanitized);
  }

  get qualifications() {
    let value = this[qualifications];
    return this.constructor.fromArray(value);
  }  set responsibilities(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[responsibilities] = this.constructor.toArray(sanitized);
  }

  get responsibilities() {
    let value = this[responsibilities];
    return this.constructor.fromArray(value);
  }  set salaryCurrency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[salaryCurrency] = this.constructor.toArray(sanitized);
  }

  get salaryCurrency() {
    let value = this[salaryCurrency];
    return this.constructor.fromArray(value);
  }  set skills(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[skills] = this.constructor.toArray(sanitized);
  }

  get skills() {
    let value = this[skills];
    return this.constructor.fromArray(value);
  }  set specialCommitments(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[specialCommitments] = this.constructor.toArray(sanitized);
  }

  get specialCommitments() {
    let value = this[specialCommitments];
    return this.constructor.fromArray(value);
  }  set title(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[title] = this.constructor.toArray(sanitized);
  }

  get title() {
    let value = this[title];
    return this.constructor.fromArray(value);
  }  set workHours(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[workHours] = this.constructor.toArray(sanitized);
  }

  get workHours() {
    let value = this[workHours];
    return this.constructor.fromArray(value);
  }

}

export default JobPosting;
