

var film = angular.module('myfilm', []);
film.controller('filmController', function($scope, $http){	
	$http({method: 'POST', url: 'https://swapi.co/api/films'}).success(function(data)
	{
		$scope.films = data['results']; 
		$scope.synopsis = "Synopsis :"
		$scope.starwars = "STAR WARS :"

		$scope.showDetails = function(film){
	      $scope.selectedFilm = film;
	      $scope.episode = "Episode";
	      $scope.jpg = ".jpg";
	      $scope.director = "Director : ";
	      $scope.producer = " | Producer : ";
	      $scope.synopsisfilm = "Synopsis :"
	      $scope.cover = "img/"+film.episode_id+".jpg";
	      $scope.names = name;
	    }
	});
	
 });




// angular.module("myfilm", [])
//   .controller("PersonController", ["$scope", function($scope) {
//     var model = {
//       people: [
//         {first: "Anup" , last: "Vasudeva", city: "Delhi", address: "B/12, Dell Appartments"},
//         {first: "Vijay", last: "Kumar", city: "Mumbai", address: "A-5/12, ABC Appartments"},
//         {first: "Amit", last: "Dhaiya", city: "Pune", address: "Address1"},
//         {first: "John", last: "Abharam", city: "Mumbai", address: "Address2"},
//         {first: "Sachin", last: "Sharma", city: "Ahemdabad", address: "Address3"}
//       ]
//     };
    
//     $scope.model = model;
    
//     $scope.showDetails = function(person){
//       $scope.selectedPerson = person;
//     }
// }]);