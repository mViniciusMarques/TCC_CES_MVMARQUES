const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('OK')
});

require('./controllers/authController')(app);
require('./controllers/projectController')(app);
require('./controllers/messageController')(app);

console.log('listening')
app.listen(3000);