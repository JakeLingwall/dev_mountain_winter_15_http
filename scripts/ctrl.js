//Here we declare our controller!
//the first step is to tell it which module to inject this into. 
//in this case we are using our awesomeApp module from our app.js
//after that we tell it which angular component we are using. 
//we want a controller so we use .controller.
//we pass that declaration two paramenters.
//1) the name of the controller.
//2) a function which has parameters for all our dependices. 
//those dependicies get dependcy inject
angular.module('awesomeApp').controller('ctrl', function($scope, $cookieStore, $http, movieGetter){
  //Here we use the $cookieStore to save a cookie on our machine.
  $cookieStore.put('myCookie', 'werwrsafewafsd');
  //we use the .put method to save a cookie. 
  //.get method to find an existing cookie and remove to delete it.
  


  //This is the Jquery way of performing ajax requests.
  //We use $.ajax to do the magic for us 
  //We pass that an object with a URL key and a value of the URL we want to hit.
  //if we want to use other methods we need to declare that.
  //see JQUERY API. It's great.
  
  //$.ajax({url: 'http://omdbapi.com/?t=star+wars&y=&plot=short&r=json'})
  //      .done(function(data){
  //        //when the ajax request is finished, it calls .done
  //        //We then take that data and put it on the scope.
  //        //but because we are in jquery land, we have to manually tell angular to update
  //        $scope.movie = JSON.parse(data);
  //        //this is how we tell it to manually update
  //        $scope.$apply();
  //      });
  //

  //Here we use our movieGetter factory to request data.
  //movieGetter was injected on the first line. 
  //we call the getMovie() method on the movieGetter object to get our data.
  //that method returns us a promise. 
  //We don't know how long that method will take so the promise is great!
  //we tell the promise what we want it to do whenever it's finished by using the .then method.
  //we give the .then method a function. We then bind the response to the scope.
  movieGetter.getMovie('water world').then(function(response){
    //Angulars $http gives us back an object as a response.
    //so to get to the data we need to say response.data;
    $scope.movie = response.data;
  });

  //search stuff we did as a bonus
  $scope.search = function(){
    movieGetter.getMovie($scope.searchTerm).then(function(response){
      $scope.movie = response.data;
    });
  }


});
