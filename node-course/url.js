const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gitbut.co.kr/book/bookList.aspx?sercate1=001001000#ancl');

console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

const parsedUrl = url.parse('http://www.gitbut.co.kr/book/bookList.aspx?sercate1=00100100#anc');
console.log('url.parse()', parsedUrl);
