const express = require('express')
const App2 = express();
const port = 1512;


const home = require('./home');
const contact = require('./contact');
const registration = require('./registration');
const about = require('./about')

App2.use("/home",home);
App2.use("/contact",contact);
App2.use("/registration",registration);
App2.use("/about",about);

App2.get('/', (req,res) => {
    res.send(`<center><h1 style="color:blue;background-color:black;"> Hello World ! I am Faisal Abbas || BlockChain Programmer </h1></center>
                <center><h2 style="color:orange;background-color:black;">  'Go To Website' <p>Pasted Below Links in the 'URL Section'</p> </h2></center>
                <center><h3 style="color:white;background-color:black;"> For 'Home' : localhost:1512/home </h3></center>
                <center><h3 style="color:white;background-color:black;"> For 'About' : localhost:1512/about </h3></center>
                <center><h3 style="color:white;background-color:black;"> For 'Contact' : localhost:1512/contact </h3></center>
                <center><h3 style="color:white;background-color:black;"> For 'Registration' : localhost:1512/registration </h3></center>`)
    console.log("Hello")
});

App2.listen(port, (req,res) => {
    console.log('Example App Listening on Port ${port}!')
});