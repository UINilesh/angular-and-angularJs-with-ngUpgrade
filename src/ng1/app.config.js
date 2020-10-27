'use strict';

angular.
  module('detailsApp').
  config(['$routeProvider','$locationProvider',
    function config($routeProvider, $locationProvider) {
      $routeProvider.
        when('/', {
        template: '<home-page></home-page>'
        }).
         when('/details', {
          template: '<phone-list></phone-list>',
          
        }).
        when('/ng2-demo', {
          template: '<ng2-demo></ng2-demo>'
        })
        .otherwise({template : ''});
    }
  ]);
