import { Injectable } from '@angular/core';

/**
 * Mock Helper class
 * Generate random elements statics
 * Not of my work but quite good !
 * @export
 * @class MockHelperService
 */
@Injectable()
export class MockHelperService {

  /**
   * A list of random words
   * @memberof MockHelperService
   */
  words = [];
  /**
   * A list of countries' alpha code
   * @memberof MockHelperService
   */
  countryCodes = [];

  /**
   * Creates an instance of MockHelperService.
   * @memberof MockHelperService
   */
  constructor() {
    this.words = [
      'ungrappling',
      'zephyrian',
      'prescriptivism',
      'fescue',
      'carbonylic',
      'swore',
      'disintegrative',
      'lionizing',
      'abettor',
      'unprescient',
      'lobber',
      'potemkin',
      'purusha',
      'cuing',
      'outsliding',
      'dynamoelectric',
      'milligal',
      'acquaintance',
      'locatable',
      'discobolos',
      'digs',
      'rhodesian',
      'guiana',
      'inwinding',
      'wholly',
      'reeligibility',
      'preconformity',
      'culottes',
      'misleader',
      'nosogeny',
      'proabolitionist',
      'chutist',
      'hygrostat',
      'dharana',
      'beardless',
      'meal',
      'unpeaceful',
      'preconsent',
      'undoctrined',
      'iroquoian',
      'idyll',
      'cabala',
      'outbreathing',
      'sniveler',
      'preposition',
      'africa',
      'apostrophising',
      'bumboatman',
      'perikeiromene',
      'overassumptive',
      'eonism',
      'significance',
      'introgression',
      'yeast'
    ];

    this.countryCodes = ['HKG', 'HMD', 'HND', 'HRV', 'HTI', 'HUN', 'IDN', 'IMN',
      'IND', 'IOT', 'IRL', 'IRN', 'IRQ', 'ISL', 'ISR', 'ITA', 'JAM', 'JEY', 'JOR',
      'JPN', 'KAZ', 'KEN', 'KGZ', 'KHM', 'KIR', 'KNA'];
  }

  /**
   * Generate a random sentence
   * @param  {string} wordcount The number of words in the sentence
   * @return {string}           The sentence generated
   */
  getRandomSentence(wordcount): string {
    const words = [];
    for (let i = 0; i < wordcount; i++) {
      words.push(this.getRandomWord());
    }
    return words.join(' ');
  }

  /**
   * Generate a random word
   * @return {string}  A random word
   */
  getRandomWord(): string {
    return this.words[this.getRandomInt(0, this.words.length - 1)];
  }

  /**
   * Generate a random number
   * @param  {Number} min The min value
   * @param  {Number} max The max value
   * @return {Number}     A random number
   */
  getRandomInt(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
  }

  /**
   * Generate a random id, which is a number between 0 and 65536
   * @return {Number}  A random id
   */
  getRandomId(): string {
    return '' + this.getRandomInt(0, 65536);
  }

  /**
   * Generate a random date
   * @param  {Date} min The min value
   * @param  {Date} max The max value
   * @return {Date}     A random Date
   */
  getRandomDate(min, max): Date {
    return new Date(Math.floor(Math.random() * (max.getTime() - min.getTime())) + min.getTime());
  }

  /**
   * Generate a random boolean
   * @return {Boolean}  A random boolean
   */
  getRandomBoolean(): Boolean {
    return Math.random() > 0.5;
  }

  /**
   * Generate a random mail adresse
   * @return {string}  A random mail
   */
  getRandomMail(): string {
    return `${this.getRandomWord()}@fake-luciole-fake.fr`;
  }

  /**
   * Get a random value in an array
   * @param  {Array} arr The array concerned
   * @return {Object}     A random object in array
   */
  getRandomValueInArray(arr) {
    if (arr.length > 0) {
      const i = Math.floor(Math.random() * arr.length);
      return arr[(i < arr.length) ? i : arr.length - 1];
    }
    return null;
  }

  /**
   * Generate an array with random elements in it
   * @param  {Number} maxLength     The number max of items
   * @param  {Function} itemGenerator A function that return an object that will be generated
   * @return {Array}               An array with random elements in it
   */
  getRandomArray(maxLength, itemGenerator): Array<undefined> {
    const result = [];
    const length = this.getRandomInt(0, maxLength);
    for (let i = 0; i < length; i++) {
      result.push(itemGenerator(i));
    }
    return result;
  }

  /**
   * Generate a random country alpha code
   * @return {string}  A random country alpha code
   */
  getRandomCountry(): string {
    return this.getRandomValueInArray(this.countryCodes);
  }

}
