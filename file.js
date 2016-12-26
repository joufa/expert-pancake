/**
 * file.js
 * 
 * TODO: File/string replace operations
 */

var fs = require('fs');
var fileFolder = 'uploads';


function indexDirectory(directory, callback) {
    fs.readdir(directory, function(err, files) {
        callback(files);
    });
}

var output = indexDirectory(fileFolder, function(data) {
    console.log(data);
});


// http://stackoverflow.com/questions/6831918/node-js-read-a-text-file-into-an-array-each-line-an-item-in-the-array/34033928#34033928
/*
var results = [];
  var rl = require('readline').createInterface({
    input: require('fs').createReadStream('./assets/stylesheets/_icons.scss')
  });


  // for every new line, if it matches the regex, add it to an array
  // this is ugly regex :)
  rl.on('line', function (line) {
    var re = /\.icon-icon.*:/;
    var match;
    if ((match = re.exec(line)) !== null) {
      results.push(match[0].replace(".",'').replace(":",''));
    }
  });


  // readline emits a close event when the file is read.
  rl.on('close', function(){
    var outputFilename = './icons.json';
    fs.writeFile(outputFilename, JSON.stringify(results, null, 2), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("JSON saved to " + outputFilename);
        }
    });
  });
  */
