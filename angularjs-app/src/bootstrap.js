import angular from 'angular';
import 'angular-route';
import React from 'react';
import ReactDOM from 'react-dom';

const app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<h1>Welcome to AngularJS</h1><react-component></react-component>',
    })
    .otherwise({ redirectTo: '/' });
}]);

app.directive('reactComponent', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      import('ReactApp/ButtonComponent').then(ButtonModule => {
        const ReactButton = ButtonModule.default;
        ReactDOM.render(<ReactButton />, element[0]);
        console.log(ButtonModule);
      });
    },
  };
});

// Explicitly export the module for potential debugging and validation
export default app;

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
