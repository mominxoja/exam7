const express = require('express');
const app = express();
const cookie = require('cookie-parser');
const routes = require('./routes')
app.use(express.json());
const fileUpload = require("express-fileupload")

app.use(fileUpload())

app.use(express.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', process.cwd()+'/src/views')

app.use(routes)

app.listen(3030,()=>{
    console.log(3030+"in listening");
})