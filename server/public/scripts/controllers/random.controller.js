/**   Giphy Random Controller */

app.controller("GiphyRandomController", ['$http', function($http){
    const self = this;
    self.random = {};
    self.randomGif = function(){
      console.log('random Gif clicked');
      const config = {
        params:{
          api_key: apiKey
          }
        };
      $http.get('http://api.giphy.com/v1/gifs/random', config).then(function(response){
          self.random = response.data.data;
          console.log('result:', self.random);
          
      })//end success on GET
    }// end randomGif functions
    
  
  console.log('Random Controller works!')
}]);