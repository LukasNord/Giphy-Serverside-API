const express = require('express');
const app = express();
const router = express.Router();
const axios = require('axios');





router.post('/search', (req,res) => {
    console.log('req: ', req.body.search);
    let search = req.body.search;

    const url = 'http://api.giphy.com/v1/gifs/search';
    const config = {
        params:{
          api_key: process.env.GIPHY_KEY,
          q: search,
        //   offset: self.offset,
        //   limit: 1
          }
        };
    //axios is called to make the oubound API call to the 3rd party.   
    axios.get(url, config).then(function(response){
         
        console.log('search response', response.data.data);
        res.send(response.data.data);
    
   
    }).catch(err => {
        console.log('error: ', err);
        res.sendStatus(500);
    });
});//end search call

router.get('/random', (req,res) => {

    const url = 'http://api.giphy.com/v1/gifs/random';
    const config = {
        params:{
          api_key: process.env.GIPHY_KEY,
          }
        };
    //axios is called to make the oubound API call to the 3rd party.   
    axios.get(url, config).then(function(response){
         
        console.log('random response', response.data);
        res.send(response.data);
    
   
    }).catch(err => {
        console.log('error: ', err);
        res.sendStatus(500);
    });
});//end search call


  




module.exports = router;