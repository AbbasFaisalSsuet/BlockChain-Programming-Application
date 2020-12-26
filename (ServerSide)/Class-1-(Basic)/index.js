const { request } = require('express');
var path = require('path')
const express = require('express')
const App1 = express();
const port = 1214;

console.log(path.join(__dirname,"./StaticWeb"));

const StaticPath = path.join(__dirname,"./StaticWeb")
App1.use(express.static(StaticPath))

App1.get('/', (req,res) => {
    res.send("<center> Hello World ! I am Faisal Abbas || BlockChain Programmer </center>")
    console.log("Hello Home")
});


App1.get('/Home', (req,res) => {
    res.send("<center> If You Find Any Help Feel Free To Contact With Me... <br> Email:faisalabbasjaffri05@gmail.com <br> Number:0334-0358289 </center>")
})


App1.get('/About', (req,res) => {
    res.send("<center> I am Blochain Certified Developer Under Kamyab Jawan Program </center>")
    console.log("This is my About Page")
});

App1.get('/Contact', (req,res) => {
    res.send("<center> If u can any Query Feel Free to contact me..... Do not hesitate <center>")
    console.log("This is my Contact Page")
});

App1.get('/Registration', (req,res) => {
    res.send("<center> Name:Faisal Abbas <br> Email:faisalabbasjaffri05@gmail.com <br> Number:0334-0358289 <center>")
    console.log("Login Successful")
});

function login(res, req, next){
    console.log("login Successful");
    next();
}

App1.listen(port, () => {
    console.log('Example App Listening on Port ${port}!')
});