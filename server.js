const express = require('express');
const path = require('path');
const app = express();
const log4js = require('log4js');
const bodyParser = require('body-parser');
const logger = log4js.getLogger();
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
logger.level = process.env.LOG_LEVEL;

if(process.env.POSTGRES_URI){
    //todo CONNECT TO POSTGRES
} else {
    var postgresCredentials = require('./config/local/postgres.json');
    //todo CONNECT TO POSTGRES
    logger.info('Postgres using local config json.')
}

// todo logging successful connection to db

// Serve the static files from the React app
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(passport.initialize());
app.use(passport.session());

//sessions
app.use(session({secret: 'paper-mario', resave: false, saveUninitialized: false, cookie: { maxAge: 60000 }}));

passport.use(new LocalStrategy(
    function(username, password, done) {
        // todo handle login with postgres
    }
  ));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    logger.info('Sent list of items');
});

app.get('/api/articles', (req, res) => {
    //todo get articles
});

app.get('/api/users', (req, res) => {
    //todo get users
});

app.get('/api/reservations', (req, res) => {
    //todo get reservations
});

app.post('/api/login', passport.authenticate('local', { failureRedirect: '/error' }), (req, res) => {
    res.redirect('/success?username='+req.user.username);
});

app.get('/success', (req, res) => {
    res.status(200);
    res.send("Welcome "+req.query.username+"!!")
});

app.get('/error', (req, res) => {
    res.status(401);
    res.send("invalid credentials")
});

app.post('/api/form', (req, res) => {
    logger.debug('New article being posted...')
    logger.debug(req.body)

    //todo post new article
})

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  User.findById(id, function(err, user) {
    cb(err, user);
  });
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    logger.info("request received. routing...")
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

logger.info('App is listening on port ' + port);