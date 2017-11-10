const crypto = require('crypto');
const express = require('express');
const app = express();

app.put('/message/:ID', (req, res) => {
    const hash = crypto.createHash('sha1')
        .update(new Date().toDateString() + req.params.ID)
        .digest('hex');
    res.end(hash);
});
app.listen(process.argv[2]);