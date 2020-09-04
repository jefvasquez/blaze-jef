const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

app.set('port',process.env.PORT || 4500);

app.use(cors());
app.use(bodyParser.json());

app.use('/api/customers',require('./routes/customers'));

// if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../../build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '../../build'));
    });
// }

module.exports = app;