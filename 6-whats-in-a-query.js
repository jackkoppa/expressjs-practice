const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const response = {}
    Object.keys(req.query).forEach(key => response[key] = req.query[key]);
    res.send(response);
});
app.listen(process.argv[2]);