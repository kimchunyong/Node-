const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.listen(3000, function () {
    console.log("start! express server on port 3000");
});

//static 파일
app.use(express.static('public'));

//bodyparser사용
app.use(bodyParser.json()); //json형태
app.use(bodyParser.urlencoded({ extended: true })); //클라이언트에서 json형태로 넘어오지않을시

//템플릿 엔진 설정
app.set('view engine', 'ejs');

//url routing
app.get('/', function (req, res) {
    //res.send('<h1>hi frend!</h1>')
    res.sendFile(__dirname + "/public/main.html");
});

app.get('/main', function (req, res) {
    console.log('test');
    res.sendFile(__dirname + "/public/main.html");
});

app.post('/email_post', function (req, res) {
    //get : req.param('email');
    //post 는 body parser로 파싱 필요
    console.log(req.body.email)
    //res.send('<h1>welcome !' + req.body.email + '</h1>');
    res.render('email.ejs', { 'email': req.body.email });
});

app.post('/ajax_send_email', function (req, res) {
    console.log(req.body.email);
    var responseData = { 'result': 'ok', 'email': req.body.email };
    res.json(responseData);
});