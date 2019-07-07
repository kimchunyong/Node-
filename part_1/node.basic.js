console.log('hello world...!');

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello world..!</h1>');
    console.log(__filename);
    console.log(__dirname);
}).listen(5273, () => {
    console.time('alpha');
    console.log('Server running at http://127.0.0.1:52273/');
    console.timeEnd('alpha');
});
