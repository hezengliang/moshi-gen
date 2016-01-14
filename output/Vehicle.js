/**
 * @author    Zengliang He {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Zengliang He
 * @license   MIT
 */
'use strict';

import debug from 'debug';
import _ from 'lodash';

import Product from './Product';

const _debug = debug('moshi:classes:Vehicle');
const cargoVolume = Symbol.for('cargoVolume');
const dateVehicleFirstRegistered = Symbol.for('dateVehicleFirstRegistered');
const driveWheelConfiguration = Symbol.for('driveWheelConfiguration');
const fuelConsumption = Symbol.for('fuelConsumption');
const fuelEfficiency = Symbol.for('fuelEfficiency');
const fuelType = Symbol.for('fuelType');
const knownVehicleDamages = Symbol.for('knownVehicleDamages');
const mileageFromOdometer = Symbol.for('mileageFromOdometer');
const numberOfAirbags = Symbol.for('numberOfAirbags');
const numberOfAxles = Symbol.for('numberOfAxles');
const numberOfDoors = Symbol.for('numberOfDoors');
const numberOfForwardGears = Symbol.for('numberOfForwardGears');
const numberOfPreviousOwners = Symbol.for('numberOfPreviousOwners');
const productionDate = Symbol.for('productionDate');
const purchaseDate = Symbol.for('purchaseDate');
const steeringPosition = Symbol.for('steeringPosition');
const vehicleConfiguration = Symbol.for('vehicleConfiguration');
const vehicleEngine = Symbol.for('vehicleEngine');
const vehicleIdentificationNumber = Symbol.for('vehicleIdentificationNumber');
const vehicleInteriorColor = Symbol.for('vehicleInteriorColor');
const vehicleInteriorType = Symbol.for('vehicleInteriorType');
const vehicleModelDate = Symbol.for('vehicleModelDate');
const vehicleSeatingCapacity = Symbol.for('vehicleSeatingCapacity');
const vehicleTransmission = Symbol.for('vehicleTransmission');


/**
 * A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
 */
class Vehicle extends Product {

  constructor(properties) {
    super(properties);
    let props = properties || {};
    _debug('props', props);
    _.extend(this, props);
  }

  get type() {
    return 'Vehicle';
  }

  set cargoVolume(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[cargoVolume] = this.constructor.toArray(sanitized);
  }

  get cargoVolume() {
    let value = this[cargoVolume];
    return this.constructor.fromArray(value);
  }  set dateVehicleFirstRegistered(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[dateVehicleFirstRegistered] = this.constructor.toArray(sanitized);
  }

  get dateVehicleFirstRegistered() {
    let value = this[dateVehicleFirstRegistered];
    return this.constructor.fromArray(value);
  }  set driveWheelConfiguration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text','DriveWheelConfigurationValue');
    this[driveWheelConfiguration] = this.constructor.toArray(sanitized);
  }

  get driveWheelConfiguration() {
    let value = this[driveWheelConfiguration];
    return this.constructor.fromArray(value);
  }  set fuelConsumption(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[fuelConsumption] = this.constructor.toArray(sanitized);
  }

  get fuelConsumption() {
    let value = this[fuelConsumption];
    return this.constructor.fromArray(value);
  }  set fuelEfficiency(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[fuelEfficiency] = this.constructor.toArray(sanitized);
  }

  get fuelEfficiency() {
    let value = this[fuelEfficiency];
    return this.constructor.fromArray(value);
  }  set fuelType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue','Text','URL');
    this[fuelType] = this.constructor.toArray(sanitized);
  }

  get fuelType() {
    let value = this[fuelType];
    return this.constructor.fromArray(value);
  }  set knownVehicleDamages(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[knownVehicleDamages] = this.constructor.toArray(sanitized);
  }

  get knownVehicleDamages() {
    let value = this[knownVehicleDamages];
    return this.constructor.fromArray(value);
  }  set mileageFromOdometer(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QuantitativeValue');
    this[mileageFromOdometer] = this.constructor.toArray(sanitized);
  }

  get mileageFromOdometer() {
    let value = this[mileageFromOdometer];
    return this.constructor.fromArray(value);
  }  set numberOfAirbags(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','Text');
    this[numberOfAirbags] = this.constructor.toArray(sanitized);
  }

  get numberOfAirbags() {
    let value = this[numberOfAirbags];
    return this.constructor.fromArray(value);
  }  set numberOfAxles(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','QuantitativeValue');
    this[numberOfAxles] = this.constructor.toArray(sanitized);
  }

  get numberOfAxles() {
    let value = this[numberOfAxles];
    return this.constructor.fromArray(value);
  }  set numberOfDoors(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','QuantitativeValue');
    this[numberOfDoors] = this.constructor.toArray(sanitized);
  }

  get numberOfDoors() {
    let value = this[numberOfDoors];
    return this.constructor.fromArray(value);
  }  set numberOfForwardGears(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','QuantitativeValue');
    this[numberOfForwardGears] = this.constructor.toArray(sanitized);
  }

  get numberOfForwardGears() {
    let value = this[numberOfForwardGears];
    return this.constructor.fromArray(value);
  }  set numberOfPreviousOwners(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','QuantitativeValue');
    this[numberOfPreviousOwners] = this.constructor.toArray(sanitized);
  }

  get numberOfPreviousOwners() {
    let value = this[numberOfPreviousOwners];
    return this.constructor.fromArray(value);
  }  set productionDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[productionDate] = this.constructor.toArray(sanitized);
  }

  get productionDate() {
    let value = this[productionDate];
    return this.constructor.fromArray(value);
  }  set purchaseDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[purchaseDate] = this.constructor.toArray(sanitized);
  }

  get purchaseDate() {
    let value = this[purchaseDate];
    return this.constructor.fromArray(value);
  }  set steeringPosition(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'SteeringPositionValue');
    this[steeringPosition] = this.constructor.toArray(sanitized);
  }

  get steeringPosition() {
    let value = this[steeringPosition];
    return this.constructor.fromArray(value);
  }  set vehicleConfiguration(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[vehicleConfiguration] = this.constructor.toArray(sanitized);
  }

  get vehicleConfiguration() {
    let value = this[vehicleConfiguration];
    return this.constructor.fromArray(value);
  }  set vehicleEngine(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'EngineSpecification');
    this[vehicleEngine] = this.constructor.toArray(sanitized);
  }

  get vehicleEngine() {
    let value = this[vehicleEngine];
    return this.constructor.fromArray(value);
  }  set vehicleIdentificationNumber(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[vehicleIdentificationNumber] = this.constructor.toArray(sanitized);
  }

  get vehicleIdentificationNumber() {
    let value = this[vehicleIdentificationNumber];
    return this.constructor.fromArray(value);
  }  set vehicleInteriorColor(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[vehicleInteriorColor] = this.constructor.toArray(sanitized);
  }

  get vehicleInteriorColor() {
    let value = this[vehicleInteriorColor];
    return this.constructor.fromArray(value);
  }  set vehicleInteriorType(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Text');
    this[vehicleInteriorType] = this.constructor.toArray(sanitized);
  }

  get vehicleInteriorType() {
    let value = this[vehicleInteriorType];
    return this.constructor.fromArray(value);
  }  set vehicleModelDate(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Date');
    this[vehicleModelDate] = this.constructor.toArray(sanitized);
  }

  get vehicleModelDate() {
    let value = this[vehicleModelDate];
    return this.constructor.fromArray(value);
  }  set vehicleSeatingCapacity(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'Number','QuantitativeValue');
    this[vehicleSeatingCapacity] = this.constructor.toArray(sanitized);
  }

  get vehicleSeatingCapacity() {
    let value = this[vehicleSeatingCapacity];
    return this.constructor.fromArray(value);
  }  set vehicleTransmission(value) {
    let sanitized = this.constructor.sanitizeValue(value, 'QualitativeValue','Text','URL');
    this[vehicleTransmission] = this.constructor.toArray(sanitized);
  }

  get vehicleTransmission() {
    let value = this[vehicleTransmission];
    return this.constructor.fromArray(value);
  }

}

export default Vehicle;
