var movieApp = angular.module("movieApp", [])
movieApp.controller('TableController', function TableController($scope){
  $scope.movies =[
    {
        id: 1,
       moviename: ' Black Panter', 
       time: '2hrs', 
       leadactor: 'ChadWick BossMan',
       genre:'Action',    
       rating:'PG',
      },
      {
        id: 2,
       moviename: 'Joker', 
       time: '2hrs', 
       leadactor: 'Joaquin Phoenix	',
       genre:'Drama/Crime	',    
       rating:'PG',
      }
    ]
  }
  
) 