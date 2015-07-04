'use strict';


angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
 $scope.user = {
   name: 'Ian McCunn',
   something: 5,
   address: {
     street: 'PO Box 123',
     city: 'Milk',
     planet: 'Jupiter'
   },
   friends: [
     'han',
     'Leia'
   ]
 }; 


});

angular.module('app').directive('userInfoCard', function() {
  
  return {
    restrict: 'A',
    templateUrl: 'userInfoCard.html',
    controller: function($scope) {
       
      $scope.knightMe = function(user) {
        user.rank = 'Knight';
      };
    }
  };
});
