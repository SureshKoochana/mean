const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

// Output

// { root: '/',
//   dir: '/home/sureshk/fortunapix/learn/node/node_course',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path' }
