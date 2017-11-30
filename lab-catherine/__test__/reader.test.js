'use strict';

const textReader = require('../lib/reader');
const paths = [`${__dirname}/../assets/cat.txt`, `${__dirname}/../assets/elephant.txt`,`${__dirname}/../assets/seal.txt`];
const invalidPaths = [`${__dirname}/../assets/cat`, `${__dirname}/../assets/elephant`,`${__dirname}/../assets/seal`];

describe('reader.test.js', () => {

  describe('testing to see if file text and file paths are displaying correctly', () => {

    test('return the file text if there are no errors',
      (done) => {
        textReader.readText(paths, (error, data) => {
          expect(error).toBeNull();
          expect(data).toEqual([`Cats say meow!`, `Elephants are the largest land animals in the world.`, `Seals spend much of their life in water, but they mate, give birth to babies and take care of them on the shore.`]);
          done();
        });
      });
  });

  describe('testing to see that incorrect file paths throw an error', () => {
      
    test('throw an error if invalid file path', () => {
      textReader.readText(invalidPaths, (error) => {
        expect(error).not.toBeNull();
      });
    });
  });
});