myApp.controller('HomeCtrl', function($scope, homeFactory) {
  $scope.items = homeFactory.getUsers();
  
 

  $scope.addAction = function() {
    $scope.items = homeFactory.addAction($scope.newAction);
  }
  
  $scope.delAction = function(user) {
    $scope.items = homeFactory.delAction(user);
  }
  
}).factory('homeFactory', function($http){
  var factory = {};
 
  var users = [];
  
  factory.getUsers = function(){
    return users;
  }
  
  factory.addAction = function(user){
    users.push(user);
    return users;
  }
  
  factory.delAction = function(user){
    if (user) {
      var index = users.indexOf(user);
      users.splice(index, 1);
    }
    return users;
  }
  
  
  return factory;
});

  function clearField(input) {
    input.value = "";
    }

