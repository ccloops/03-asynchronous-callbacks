'use strict';

const textReader = module.exports = {};
const fs = require('fs');
const fileTextArray = [];

textReader.readText = (paths, callback) => {
  fs.readFile(paths[0], (error, data) => {
    if(error) callback(error);
    fileTextArray.push(data.toString());
    fs.readFile(paths[1], (error, data) => {
      if(error) callback(error);
      fileTextArray.push(data.toString());
      fs.readFile(paths[2], (error, data) => {
        if(error) callback(error);
        fileTextArray.push(data.toString());
        callback(null, fileTextArray);
      });
    });
  });
};
