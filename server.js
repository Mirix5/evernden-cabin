const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const log4js = require('log4js');
const bodyParser = require('body-parser');
const logger = log4js.getLogger();
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
logger.level = process.env.LOG_LEVEL;


mongoose.promise = global.Promise;
const options = { useNewUrlParser: true, useUnifiedTopology: true }

if(process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI, options);
    mongoose.set('debug', false);
    logger.info('MongoDB found config variable uri.')
} else {
    var mongoCredentials = require('./config/local/mongo.json');
    mongoose.connect(mongoCredentials.uri, options);
    mongoose.set('debug', true);
    logger.info('MongoDB using local config json.')
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  logger.info('Successfully connected to database.')
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String
}, {collection:'Users'});
const User = mongoose.model('User', userSchema);

const articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    date: String,
    body: String
}, {collection:'Articles'});
const Article = mongoose.model('Article', articleSchema);


// Serve the static files from the React app
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(passport.initialize());
app.use(passport.session());

//sessions
app.use(session({secret: 'paper-mario', resave: false, saveUninitialized: false, cookie: { maxAge: 60000 }}));

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({
            username: username,
            password: password
        }, function(err, user) {
            if (err) {
            return done(err);
            }

            if (!user) {
            return done(null, false);
            }

            if (user.password != password) {
            return done(null, false);
            }
            return done(null, user);
        });
    }
  ));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    logger.info('Sent list of items');
});

app.get('/api/getArticles', (req, res) => {
    Article.find({}).sort('-date').exec(function(err, articles) { 
        if(err) return logger.error(err);
        res.json(articles);
    });
    // Article.find(function(err, articles){
    //     if(err) return logger.error(err);
    //     logger.debug(articles);
    //     res.json(articles); 
    // })
});

app.get('/api/users', (req, res) => {
    User.find(function(err, users){
        if(err) return logger.error(err);
        logger.debug(users);
        res.json(users); 
    })
});

app.post('/api/login', passport.authenticate('local', { failureRedirect: '/error' }), (req, res) => {
    // logger.debug("Looking up user "+req.body.username+"...");
    // User.findOne({username: req.body.username, password: req.body.password}, function(err, user){
    //     if(err) return logger.error(err);
    //     logger.debug("Found user:\n"+user);
    //     // res.json(user); 

    // })
    res.redirect('/success?username='+req.user.username);
});

app.get('/success', (req, res) => {
    res.status(200);
    res.send("Welcome "+req.query.username+"!!")
});

app.get('/error', (req, res) => {
    res.status(400);
    res.send("invalid credentials")
});

app.post('/api/form', (req, res) => {
    logger.debug('New article being posted...')
    logger.debug(req.body)

    var article = new Article(req.body);
    article.save(function (err, art) {
        if (err) return logger.error(err);
        logger.debug(art.title + " saved to article collection.");
        logger.debug(art)
        res.status(200).json({_id: art._id})
    })
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