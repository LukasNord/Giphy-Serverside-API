const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
const env = require('dotenv');
const giphyRouter = require('./routes/giphy.router');
const bodyParser = require('body-parser');

//bind .env file variables to process.env object
env.config();
//middleware
app.use(express.static('server/public'));
app.use(bodyParser.json()); // needed for angular requests




//routes
app.use('/giphy', giphyRouter);




app.listen(port, () => {
    console.log(`server running on ${port}`);

});