'use strict';


angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
   $scope.user1 = {
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
  
   $scope.user2 = {
     name: 'bob',
     something: 33,
     address: {
       street: 'PO Box 333',
       city: 'LA',
       planet: 'Mars'
     },
     friends: [
       'Mom',
       'Milk'
     ]
   }; 

});

angular.module('app').directive('userInfoCard', function() {
  
  return {
    restrict: 'A',
    templateUrl: 'userInfoCard.html',
    scope: {
      user: '=' 
    },
    controller: function($scope) {
       
      $scope.knightMe = function(user) {
        user.rank = 'Knight';
      };
    }
  };
});
