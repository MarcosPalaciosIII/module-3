const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const cors         = require('cors');

require("dotenv").config();

require("./config/mongoos-setup");

const app = express();



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    // accept cookies across domains
    credentials: true,
    // ONLY allow these domains
    origin: [ 'http://localhost:4200' ]
  })
);


// ROUTERS  ------------------------------------

const phoneApi = require("./routes/phone-api-router");
app.use("/api", phoneApi);
// all URL's in this router will get an extra "/api"
// (For example "/phones" becomes "/api/phones")

// ---------------------------------------------

// catch 404 and forward to error handler


module.exports = app;
