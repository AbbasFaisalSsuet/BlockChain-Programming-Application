const { request } = require('express');
const express = require('express')
var path = require('path')
var pug = require('pug')
const app = express();
const port = 1512;


app.set('view engine','pug');
app.get('/' , (req,res) => {
    res.render("./bc", {tittle:"Dynamic Website"})
})


app.listen(port, () => {
    console.log(`Example App Listening on Port ${port}`)
});