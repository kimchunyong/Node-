const path = require('path')

path.sep;

console.log(path.sep);
console.log(path.delimiter);
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.basename(__filename));

console.log(path.normalize('C://users\\\\zerocho\\ \path.js'));
console.log(path.isAbsolute('C:\\'));

console.log(path.relative('C:\\users\\yong', 'C:\\'));

console.log(__dirname);

console.log(path.join(__dirname));
console.log(path.join(__dirname, '..', '..', '/users', '.'))
console.log(path.resolve(__dirname, '..', '..', '/users', '.'))