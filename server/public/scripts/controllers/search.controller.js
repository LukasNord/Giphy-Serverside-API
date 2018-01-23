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
      console.log('search Gif clicked');
      //pagination buttons
      const config = {
        params:{
          api_key: apiKey,
          q: search,
          offset: self.offset,
          limit: 1
          }
        };
      $http.get('http://api.giphy.com/v1/gifs/search', config).then(function(response){
        self.gifArray = response.data.data;  
        console.log('response', response.data.data);
        
        
        
      })//end success on GET
    }// end searchGif functions
  
  }]);// end Giphy Search Controller