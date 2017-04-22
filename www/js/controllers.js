angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$state,$http) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('addctrl', function($scope, $stateParams) {
  $scope.add = function() {
    
    $scope.sum = parseInt(this.no1)+parseInt(this.no2);
    console.log('$scope.sum');
   
      };
      $scope.sub = function() {
    
    $scope.sum = parseInt(this.no1)-parseInt(this.no2);
    console.log('$scope.sum');
         };
         $scope.mul = function() {
    
    $scope.sum = parseInt(this.no1)*parseInt(this.no2);
    console.log('$scope.sum');
         };
})

.controller('fontctrl', function($scope, $stateParams) {
})

.controller('calcctrl', function($scope, $stateParams) {
$scope.sum=0;
$scope.add = function() {
  $scope.sym="+";
    $scope.sum = this.sum+parseInt(this.no1);
    console.log('$scope.sum');
   
      };
      $scope.sub = function() {
    $scope.sym="-";
    $scope.sum = this.sum-parseInt(this.no1);
    console.log('$scope.sum');
         };
          $scope.div = function() {
    $scope.sym="%";
    $scope.sum = this.sum/parseInt(this.no1);
    console.log('$scope.sum');
         };
         $scope.mul = function() {
    $scope.sym="*";
    $scope.sum = this.sum*parseInt(this.no1);
    console.log('$scope.sum');
         };

})


.controller('databasectrl', function($scope, $stateParams,$http) {

$scope.ins = function() {

  $http.get('http://rest-service.guides.spring.io/greeting').then(function(response) {
            $scope.greeting = response.data;
            console.log($scope.greeting);
});
   
         };  
 
  })

.controller('radioctrl', function($scope, $stateParams) {
 
  })

.controller('circlectrl', function($scope, $stateParams) {
 
  })

.controller('elictrl', function($scope, $stateParams) {
 
  })
.controller('polyctrl', function($scope, $stateParams) {
 
  })
.controller('rectctrl', function($scope, $stateParams) {
 
  })
.controller('canvasctrl', function($scope, $state) {
 
 $scope.cir = function() {
 $state.go('app.circle'); 
      };
$scope.rec = function() {
 $state.go('app.rect'); 
      };
$scope.eli = function() {
 $state.go('app.eli'); 
      };
$scope.poly = function() {
 $state.go('app.poly'); 
      };

  })
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
