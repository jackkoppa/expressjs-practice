const express = require('express');
const fs = require('fs');
const app = express();

app.get('/books', (req, res) => {
    const fileName = process.argv[3];
    fs.readFile(fileName, (e, data) => {
        if (e) return res.sendStatus(500);
        try {
            books = JSON.parse(data)
        } catch (e) {
            res.sendStatus(500);
        }
        res.send(books);
    });
});
app.listen(process.argv[2]);