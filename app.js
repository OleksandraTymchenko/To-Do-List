var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];
     $scope.markAll = false;
     $scope.currentDate = new Date();
     
  $scope.reset = function() {
        $scope.todoInput = null;
    };
    $scope.reset();

    $scope.todoAdd = function() {
        var task = {
          todoText:$scope.todoInput, 
          done:false,
          priority:$scope.priority
          }
        $scope.todoList.push(task);
        $scope.todoInput = "";
    };
    
    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(todo) {
            if (!todo.done) $scope.todoList.push(todo);
        });
    };
$scope.delete = function() {
            $scope.todoList.splice(this.$index, 1);
        }
        
  
  $scope.getTotalTodos = function () {
    return $scope.todoList.length;
  }; 
   $scope.toggleMarkAll = function() {
         angular.forEach($scope.todoList, function(todo) {
        todo.done =$scope.markAll;
        });
         };
});