const crypto = require('crypto');
const express = require('express');
const app = express();

app.put('/message/:ID', (req, res) => {
    const id = req.params.ID;
    const hash = crypto.createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');
    res.send(hash);
});
app.listen(process.argv[2]);