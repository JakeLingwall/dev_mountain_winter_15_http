//we declare which module to put this factory in. 
//then we tell it which angular component we want to create.
//this time it's a factory.
//We then give it a name
//And then we give a function that contians it's dependcies. 
angular.module('awesomeApp').factory('movieGetter', function($http){
  //We told our factory to inject $http.
  //That is angulars way of handling AJAX requests for us nicely. 
  //It's promised based! Yay!

  //factories in angular return an object. 
  //Services bind everything to "this" instead.
  //In general always use factories.
  //Here we return an object to be used elsewhere.
  return {
    //our factory object has a getMovie method which fetches our data for us.
    getMovie: function(title){
      //Here we go and make an $http request on the behalf of our users
      //We then return the resulting promise to them.
      //This allows them to handle binding the data to their scope.
      return $http.get('http://omdbapi.com/?t=' + title  + '&y=&plot=short&r=json');
    }

  }
})
