require('dotenv').config();
const express = require('express'),
      controller = require('./controller'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env


let app = express();

app.use(express.json());

massive(CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        console.log('DB connected');
    })

// ======== AUTH ENDPOINTS ======== //
    app.post('/api/register', controller.register)
    app.post('/api/login', controller.login)
// ======== ======== ======== ===== //

const port = SERVER_PORT;
app.listen(port, () => console.log(`server port: ${port}`));