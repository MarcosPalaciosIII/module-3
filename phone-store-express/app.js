const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const cors         = require('cors');
const session      = require('express-session');
const passport     = require('passport');


require("dotenv").config();

require("./config/mongoos-setup");
require("./config/passport-setup");

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
    // ONLY allow these domains to connect
    origin: [ 'http://localhost:4200' ]
  })
);
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ROUTERS  ------------------------------------

const phoneApi = require("./routes/phone-api-router");
app.use("/api", phoneApi);
// all URL's in this router will get an extra "/api"
// (For example "/phones" becomes "/api/phones")

const userApi = require('./routes/user-api-router');
app.use("/api", userApi);

// ---------------------------------------------


// send the Angular HTML if no Express routes match
app.use((req, res, next) => {
  res.sendFile(__dirname + '/public/index.html');
});

// catch 404 and forward to error handler


module.exports = app;
