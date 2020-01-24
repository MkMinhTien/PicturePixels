const express = require('express');

const app = express;

app.get('/', (req, res) =>

    res.send('Hi')

);

app.listen(92634, () =>

    console.log('Website NOW is RUNNING!')

);