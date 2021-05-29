const express = require ('express');
const fileRouter = require ('./routes/flatFile');


const bodyparser = require ('body-parser');
const url = require ('url');
const querystring = require ('querystring');
const urlencoded = require ('body-parser');
const path = require('path');
const { nextTick } = require('process');


let app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send('Hello World..!!')
})

let server = app.listen(8090, function () {
    let host = server.address().address
    let port = server.address().port
    console.log("Server listening at http://%s:%s", host, port)
})


app.use('/',fileRouter);


