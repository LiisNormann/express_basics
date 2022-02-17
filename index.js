const express = require('express');
const app = express();

const path = require("path");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//add public directory
app.use(express.static('public'));
//add views directory path
app.set('views', path.join(__dirname, 'views'));
//add views template engine
app.set('view engine', 'ejs');

app.get('/login', (req, res)=> {
    res.render('login');
});

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    if(username === 'user' && password === 'qwerty'){
        res.redirect('/dashboard');
    }
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});

/*

const express = require("express");
const app = express();
//set up brouther address row router
app.get('/', (req, res)=> {
    //create html response
    res.send('<a href="/contact">Contact Us</a> <br> <a href="/about">About Us</a>');
});

app.get('/contact', (req, res)=> {
    res.send('<h1>Contact Us Page</h1>');
});

app.get('/about', (req, res)=> {
    res.send('<h1>About Us Page</h1>');
});

app.get('*', (req, res)=> {
    res.send('404. This page does not exist. <a href="/">Go to HomePage</a>')
});

//listen app via port
app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000');
});*/
