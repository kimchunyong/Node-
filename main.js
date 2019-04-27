const http = require('http');
const fs = require('fs');
const url = require('url');

const testFolder = './data';

fs.readdir(testFolder, function (error, filelist) {
  const files = filelist.filter(function (x) {
    return x !== '.DS_Store' && x !== 'read.js';
  });
  console.log(files);
});

fs.readFile('./sample.txt', 'utf8', function (err, data) {
  console.log(data);
});

const createServer = (server, port) => {
  http.createServer(server).listen(port);
};

const app = (request, response) => {
  /*
  let url = request.url;

  if (request.url == '/') {
    url = '/index.html';
  }
  if (request.url == '/favicon.ico') {
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
  */
  /*
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  console.log(queryData.id);

  if (_url == '/') {
    _url = '/index.html';
  }
  if (_url == '/favicon.ico') {
    return response.writeHead(404);
  }

  response.writeHead(200);
  response.end(queryData.id);
  */

  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var title = queryData.id;
  if (_url == '/') {
    title = 'Welcome';
  }
  if (_url == '/favicon.ico') {
    return response.writeHead(404);
  }
  response.writeHead(200);
  var template = `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
      <img src="coding.jpg" width="100%">
      </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
      </p>
    </body>
    </html>
    `;
  response.end(template);
};

createServer(app, 3000);
createServer(app, 5000);
