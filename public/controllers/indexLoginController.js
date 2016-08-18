angular.module('iemphourHome', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider){
        $routeProvider.when('/', {
            templateUrl:'views/partials/home.html',
            controller:'indexLoginController',
            controllerAs:'loginCtrl'
        });
    }])
    .controller('indexLoginController', function(){
        console.log('Controller was loaded')
        var self = this;
        
        self.master = {};

        self.locate = function(user) {
            console.log('locate function was fired');
            self.master = angular.copy(user);
        };
    })