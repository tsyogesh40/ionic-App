// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.radio', {
      url: '/radio',
      views: {
        'menuContent': {
          templateUrl: 'templates/radio.html',
          controller: 'radioctrl'
        }
      }
    })

 .state('app.add', {
      url: '/add',
      views: {
        'menuContent': {
          templateUrl: 'templates/add.html',
          controller: 'addctrl'
        }
      }
    })
 .state('app.font', {
      url: '/font',
      views: {
        'menuContent': {
          templateUrl: 'templates/font.html',
          controller: 'fontctrl'
        }
      }
    })

 .state('app.calc', {
      url: '/calc',
      views: {
        'menuContent': {
          templateUrl: 'templates/calc.html',
          controller: 'calcctrl'
        }
      }
    })

  .state('app.canvas', {
      url: '/canvas',
      views: {
        'menuContent': {
          templateUrl: 'templates/canvas.html',
          controller: 'canvasctrl'
        }
      }
    })
  .state('app.circle', {
      url: '/circle',
      views: {
        'menuContent': {
          templateUrl: 'templates/circle.html',
          controller: 'circlectrl'
        }
      }
    })
  .state('app.eli', {
      url: '/eli',
      views: {
        'menuContent': {
          templateUrl: 'templates/eli.html',
          controller: 'elictrl'
        }
      }
    })
  .state('app.poly', {
      url: '/poly',
      views: {
        'menuContent': {
          templateUrl: 'templates/poly.html',
          controller: 'polyctrl'
        }
      }
    })
  .state('app.rect', {
      url: '/rect',
      views: {
        'menuContent': {
          templateUrl: 'templates/rect.html',
          controller: 'rectctrl'
        }
      }
    })
 .state('app.database', {
      url: '/database',
      views: {
        'menuContent': {
          templateUrl: 'templates/database.html',
          controller: 'databasectrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/canvas');
});
