const express = require('express');

const app = express();

app.get('/',(req,res) =>{
    res.send("Hello");
})

app.get('/ping', function (req, res) {
    return res.send('pong');
   });

app.listen(3000);