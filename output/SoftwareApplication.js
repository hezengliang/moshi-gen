/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import CreativeWork from './CreativeWork';

const _debug = debug('moshi:classes:SoftwareApplication');
const applicationCategory = Symbol.for('applicationCategory');
const applicationSubCategory = Symbol.for('applicationSubCategory');
const applicationSuite = Symbol.for('applicationSuite');
const availableOnDevice = Symbol.for('availableOnDevice');
const countriesNotSupported = Symbol.for('countriesNotSupported');
const countriesSupported = Symbol.for('countriesSupported');
const downloadUrl = Symbol.for('downloadUrl');
const featureList = Symbol.for('featureList');
const fileSize = Symbol.for('fileSize');
const installUrl = Symbol.for('installUrl');
const memoryRequirements = Symbol.for('memoryRequirements');
const operatingSystem = Symbol.for('operatingSystem');
const permissions = Symbol.for('permissions');
const processorRequirements = Symbol.for('processorRequirements');
const releaseNotes = Symbol.for('releaseNotes');
const screenshot = Symbol.for('screenshot');
const softwareAddOn = Symbol.for('softwareAddOn');
const softwareHelp = Symbol.for('softwareHelp');
const softwareRequirements = Symbol.for('softwareRequirements');
const softwareVersion = Symbol.for('softwareVersion');
const storageRequirements = Symbol.for('storageRequirements');
const supportingData = Symbol.for('supportingData');


/**
 * A software application.
 */
class SoftwareApplication extends CreativeWork {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'SoftwareApplication';
  }

  set applicationCategory(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[applicationCategory] = this.constructor.toArray(sanitized);
  }

  get applicationCategory() {
    let value = this[applicationCategory];
    return this.constructor.fromArray(value);
  }  set applicationSubCategory(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[applicationSubCategory] = this.constructor.toArray(sanitized);
  }

  get applicationSubCategory() {
    let value = this[applicationSubCategory];
    return this.constructor.fromArray(value);
  }  set applicationSuite(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[applicationSuite] = this.constructor.toArray(sanitized);
  }

  get applicationSuite() {
    let value = this[applicationSuite];
    return this.constructor.fromArray(value);
  }  set availableOnDevice(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[availableOnDevice] = this.constructor.toArray(sanitized);
  }

  get availableOnDevice() {
    let value = this[availableOnDevice];
    return this.constructor.fromArray(value);
  }  set countriesNotSupported(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[countriesNotSupported] = this.constructor.toArray(sanitized);
  }

  get countriesNotSupported() {
    let value = this[countriesNotSupported];
    return this.constructor.fromArray(value);
  }  set countriesSupported(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[countriesSupported] = this.constructor.toArray(sanitized);
  }

  get countriesSupported() {
    let value = this[countriesSupported];
    return this.constructor.fromArray(value);
  }  set downloadUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[downloadUrl] = this.constructor.toArray(sanitized);
  }

  get downloadUrl() {
    let value = this[downloadUrl];
    return this.constructor.fromArray(value);
  }  set featureList(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[featureList] = this.constructor.toArray(sanitized);
  }

  get featureList() {
    let value = this[featureList];
    return this.constructor.fromArray(value);
  }  set fileSize(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[fileSize] = this.constructor.toArray(sanitized);
  }

  get fileSize() {
    let value = this[fileSize];
    return this.constructor.fromArray(value);
  }  set installUrl(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL');
    this[installUrl] = this.constructor.toArray(sanitized);
  }

  get installUrl() {
    let value = this[installUrl];
    return this.constructor.fromArray(value);
  }  set memoryRequirements(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[memoryRequirements] = this.constructor.toArray(sanitized);
  }

  get memoryRequirements() {
    let value = this[memoryRequirements];
    return this.constructor.fromArray(value);
  }  set operatingSystem(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[operatingSystem] = this.constructor.toArray(sanitized);
  }

  get operatingSystem() {
    let value = this[operatingSystem];
    return this.constructor.fromArray(value);
  }  set permissions(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[permissions] = this.constructor.toArray(sanitized);
  }

  get permissions() {
    let value = this[permissions];
    return this.constructor.fromArray(value);
  }  set processorRequirements(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[processorRequirements] = this.constructor.toArray(sanitized);
  }

  get processorRequirements() {
    let value = this[processorRequirements];
    return this.constructor.fromArray(value);
  }  set releaseNotes(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[releaseNotes] = this.constructor.toArray(sanitized);
  }

  get releaseNotes() {
    let value = this[releaseNotes];
    return this.constructor.fromArray(value);
  }  set screenshot(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','ImageObject');
    this[screenshot] = this.constructor.toArray(sanitized);
  }

  get screenshot() {
    let value = this[screenshot];
    return this.constructor.fromArray(value);
  }  set softwareAddOn(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SoftwareApplication');
    this[softwareAddOn] = this.constructor.toArray(sanitized);
  }

  get softwareAddOn() {
    let value = this[softwareAddOn];
    return this.constructor.fromArray(value);
  }  set softwareHelp(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'CreativeWork');
    this[softwareHelp] = this.constructor.toArray(sanitized);
  }

  get softwareHelp() {
    let value = this[softwareHelp];
    return this.constructor.fromArray(value);
  }  set softwareRequirements(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[softwareRequirements] = this.constructor.toArray(sanitized);
  }

  get softwareRequirements() {
    let value = this[softwareRequirements];
    return this.constructor.fromArray(value);
  }  set softwareVersion(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[softwareVersion] = this.constructor.toArray(sanitized);
  }

  get softwareVersion() {
    let value = this[softwareVersion];
    return this.constructor.fromArray(value);
  }  set storageRequirements(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'URL','Text');
    this[storageRequirements] = this.constructor.toArray(sanitized);
  }

  get storageRequirements() {
    let value = this[storageRequirements];
    return this.constructor.fromArray(value);
  }  set supportingData(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'DataFeed');
    this[supportingData] = this.constructor.toArray(sanitized);
  }

  get supportingData() {
    let value = this[supportingData];
    return this.constructor.fromArray(value);
  }

}

export default SoftwareApplication;
