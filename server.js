const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const log4js = require('log4js');
const logger = log4js.getLogger();
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


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    logger.info('Sent list of items');
});

app.get('/api/getArticles', (req, res) => {
    var articleSchema = new mongoose.Schema({
        title: String,
        author: String,
        date: String,
        body: String
    }, {collection:'Articles'});
    
    var Article = mongoose.model('Article', articleSchema);
    Article.find(function(err, articles){
        if(err) return logger.error(err);
        logger.debug(articles);
        res.json(articles); 
    })
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    logger.info("request received. routing...")
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

logger.info('App is listening on port ' + port);