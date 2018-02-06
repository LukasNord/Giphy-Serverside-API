app.controller('GiphySearchController', ['$http', function($http){
    const self = this;
    self.searchText = '';
    self.searchGifResult = {};
    
    self.gifArray = []; //container for data returned.
    
  // decrement logic for searching
    self.offset = 0;
    self.increment = function(search){
      self.offset += 1;
      self.searchGif(search);
      
    }
    self.decrement = function(search){
      self.ofset -= 1;
      if(self.offset < 0){
        self.offset = 0;
      }
      self.searchGif(search);
    }
    /* Function to trigger a search call to Giphy API*/
    self.searchGif = function(search){
      
      let query = {search: search};
      
      $http.post('/giphy/search', query).then(function(response){
        console.log('response: ', response.data);
        self.gifArray = response.data;
        
      });
    }// end searchGif Function
  
  }]);// end Giphy Search Controller