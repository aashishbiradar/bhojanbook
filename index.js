const express = require('express');

const routes = require('./routes/routes');

const app = express();
const port = 8000;
app.use('/api', routes);

app.listen(port,() => console.log(`Server is up on port ${port}`));