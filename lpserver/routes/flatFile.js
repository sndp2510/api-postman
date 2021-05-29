

const routes = require('express').Router();
const path = require('path');


// sample url :: http://localhost:8090/getFileText/?relFilePath=resources%2Ftestfile.txt
routes.get('/getFileText', function (req, res) {

    let filePath = req.query.relFilePath;

    const fs = require('fs')

    try {
        //const data = fs.readFileSync('/Users/joe/test.txt', 'utf8')
       // console.log(data)
    } catch (err) {
        console.error(err)
    }

    const absoluteFilePath = path.join(__dirname,filePath);

    res.status(200).json({message:absoluteFilePath});
})

module.exports = routes;
