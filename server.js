const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(4000, (err)=>{
    if(err) throw err;
    console.log('> Listening on http://localhost:4000');
});