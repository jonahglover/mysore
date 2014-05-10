app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: "/mysore/assets/templates/home.html"
      }).      
      otherwise({
        redirectTo: ''
      });
  }]);