import angular from 'angular';
import 'angular-route';
import React from 'react';
import ReactDOM from 'react-dom';

const app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      template: '<h1>Welcome to AngularJS</h1><home-page></home-page>',
    })
    .otherwise({ redirectTo: '/' });
}]);

app.directive('homePage', function() {
  return {
    restrict: 'E',
    link: function(scope, element) {
      import('ReactApp/Components').then((components) => {
        const NativeButton = components.ButtonComponent;
        const CounterButton = components.CounterComponent;
        const Header = components.Header;
        ReactDOM.render(<>
          <Header/>
          <NativeButton
            content={'React button with angularjs state'}
          />
          <br/>
          <br/>
          <CounterButton />
        </>, element[0]);
      });
    },
  };
});

// Explicitly export the module for potential debugging and validation
export default app;

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});
