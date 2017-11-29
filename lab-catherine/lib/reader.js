'use strict';

const textReader = module.exports = {};
const fs = require('fs');

textReader.readText = (callback) => {
  let catFilePath = `${__dirname}/../assets/cat.txt`;
  fs.readFile(catFilePath, (error, data) => {
    if(error)
      callback(error);
    callback(null, data.toString());
  });
};


// Reader Module

// In the lib/ directory create a reader.js module that exports a single function. The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs it should immediately reject the error using the callback and stop execution.

// The reader module should have the function signature (paths, callback) => undefined
// On a failure the reader module should invoke the callback with an error callback(error)
// On success the reader module should invoke the callback with null as the first parameter, and the result as the second parameter callback(null, result)