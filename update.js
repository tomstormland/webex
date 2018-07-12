var path = require('path');
var fs = require('fs');

var baseDir = __dirname + '/';

var copyArray = function(arr, dest) {

  var i, len, file;

  len = arr.length;

  for (i=0; i<len; i++) {

    file = arr[i];

    var basename = path.basename(file);

    fs.createReadStream(baseDir + file).pipe(fs.createWriteStream(baseDir + dest + basename));

  }

};

var copy = function(source, dest) {

  /* create dist directories */
  if (!fs.existsSync(baseDir + 'public/dist')) {
    fs.mkdirSync(baseDir + 'public/dist');
  }

  if (!fs.existsSync(baseDir + 'public/dist/js')) {
    fs.mkdirSync(baseDir + 'public/dist/js');
  }

  if (!fs.existsSync(baseDir + 'public/dist/css')) {
    fs.mkdirSync(baseDir + 'public/dist/css');
  }

  if (!/\/$/.test(dest)) {
    dest += '/';
  }

  if (Array.isArray(source)) {
    copyArray(source, dest);
  }

};

/* copy jquery */
copy([
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/jquery/dist/jquery.min.map',
], 'public/dist/js/');

