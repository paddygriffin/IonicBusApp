angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.homePage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/homePage.html',
        controller: 'homePageCtrl'
      }
    }
  })

  .state('tabsController.timeTablePage', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/timeTablePage.html',
        controller: 'timeTablePageCtrl'
      }
    }
  })

  .state('tabsController.cloudTabDefaultPage', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/cloudTabDefaultPage.html',
        controller: 'cloudTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.401', {
    url: '/page5',
    views: {
      'tab2': {
        templateUrl: 'templates/401.html',
        controller: '401Ctrl'
      }
    }
  })

  .state('tabsController.402', {
    url: '/page6',
    views: {
      'tab2': {
        templateUrl: 'templates/402.html',
        controller: '402Ctrl'
      }
    }
  })

  .state('tabsController.403', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/403.html',
        controller: '403Ctrl'
      }
    }
  })

  .state('tabsController.404', {
    url: '/page8',
    views: {
      'tab2': {
        templateUrl: 'templates/404.html',
        controller: '404Ctrl'
      }
    }
  })

  .state('tabsController.405', {
    url: '/page9',
    views: {
      'tab2': {
        templateUrl: 'templates/405.html',
        controller: '405Ctrl'
      }
    }
  })

  .state('tabsController.407', {
    url: '/page10',
    views: {
      'tab2': {
        templateUrl: 'templates/407.html',
        controller: '407Ctrl'
      }
    }
  })

  .state('tabsController.409', {
    url: '/page11',
    views: {
      'tab2': {
        templateUrl: 'templates/409.html',
        controller: '409Ctrl'
      }
    }
  })

  .state('tabsController.410', {
    url: '/page12',
    views: {
      'tab2': {
        templateUrl: 'templates/410.html',
        controller: '410Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});