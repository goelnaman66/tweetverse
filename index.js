const express = require('express');
const app = express();
const router = require('./src/routes/index');


app.use('/',router);        // anything that comes to this url will be handled by this router


app.listen(3000,(req,res)=>{
    console.log('server started at port 3000');
})