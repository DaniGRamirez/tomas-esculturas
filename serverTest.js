const express = require('express');

const app = express();

app.get('/test', function (req, res) {
    return res.send(' response to test');
   });

app.listen(3000);