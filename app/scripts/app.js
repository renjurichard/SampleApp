'use strict';



var ANZApp = angular.module('ANZApp', ['ngRoute', 'ngSanitize']);



    
ANZApp.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "../views/splashHome.html",
      controller: "introCtrl"
    }
  );
});



