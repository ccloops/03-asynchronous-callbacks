'use strict';

const textReader = require('../lib/reader');

describe('reader.test.js', () => {
  test('return the cat.js file if there are no errors',
    (done) => {
      textReader.readText((error, data) => {
        expect(error).toBeNull();
        expect(data).toEqual('Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good vomit food and eat it again yet lay on arms while you\'re using the keyboard purr yet i could pee on this if i had the energy. Howl on top of tall thing. ');
        done();
      });
    });
});

// Reader Module Tests

// Use TDD describe and test methods to define descriptive tests
// Each test callback should aim to test a small well defined feature of a function
// Write tests to ensure the reader function rejects errors with invalid file paths
// Write tests to ensure the reader function correctly resolves mapped string data for an array of file paths