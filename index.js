const express = require('express');
require('./services/passport');

const app = express();

// authRoutes return a function and immidiately give a cb
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);