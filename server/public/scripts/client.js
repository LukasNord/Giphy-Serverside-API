const app = angular.module('giphyApp', ['ngRoute', 'ngMaterial']);


app.config(function($routeProvider) {
  console.log('config loaded');

  $routeProvider
    .when('/search' , {
        templateUrl: '/views/search.html',
        controller: 'GiphySearchController as vm'
    })
    .when('/random' , {
      templateUrl: '/views/random.html',
      controller: 'GiphyRandomController as vm'
    })
    .otherwise(
      { redirectTo: '/search'}
    )

});

