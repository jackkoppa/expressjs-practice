const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const response = res.query;
    res.send(response);
});
app.listen(process.argv[2]);