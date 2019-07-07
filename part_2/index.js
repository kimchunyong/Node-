console.log('hello world...!');

const http = require('http');
const os = require('os');
const url = require('url');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello world..!</h1>');
}).listen(5273, () => {
    console.time('alpha');
    console.log('Server running at http://127.0.0.1:52273/');
    console.timeEnd('alpha');
    const parseObject = url.parse('http://www.naver.com');

    console.log(parseObject);
});
