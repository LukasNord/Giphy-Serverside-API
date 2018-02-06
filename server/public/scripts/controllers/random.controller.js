/**   Giphy Random Controller */

app.controller("GiphyRandomController", ['$http', function($http){
    const self = this;
    self.random = {};
    self.randomGif = function(){
      $http.get('/giphy/random').then(function(response){
          self.random = response.data.data;
          console.log('random response: ', response.data.data);
          
          
      })//end success on GET
    }// end randomGif functions
    
  
  console.log('Random Controller works!')
}]);