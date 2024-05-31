const fs = require('node:fs');
const path = require('node:path');
const express = require('express');

const app = express();

// middlewares
app.use(express.static(path.join(__dirname, '/public/')));

// variables de express
app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Index'})
})

const accountData = JSON.parse(fs.readFileSync('./json/accounts.json', { encoding: 'utf8'}))
const userData = JSON.parse(fs.readFileSync('./json/users.json', { encoding: 'utf8'}))

const PORT = 3000

app.listen(PORT, ()=> {
    console.log('PS Project Running on port 3000!')
})