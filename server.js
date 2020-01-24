var express = require('express'),
    app = express(),
    https = require('https').Server(app).listen(92634);

app.use('/js', express.static('../script'))
app.use('/css', express.static('../style'))
app.use('/img', express.static('../image'))

console.log('NodeJS NOW is RUNNING');

app.get('/', function(req, res) {

    res.sendFile(__dirname + 'public/index.html');

})