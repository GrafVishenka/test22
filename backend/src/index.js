const express = require('express');
const bodyParser = require('body-parser');
const subscriptionRoute = require('./routes/subscription');

const app = express();
app.use(bodyParser.json());

app.use('/api/subscription', subscriptionRoute);

app.listen(3001, () => {
  console.log('Backend running on port 3001');
});
