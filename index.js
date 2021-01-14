const express = require('express');
const app = express();

app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server Up and running');
})