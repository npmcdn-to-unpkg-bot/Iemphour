angular.module('iemphourHome', [])
    .controller('indexLoginController', function(){
        var self = this;
        
        self.master = {};

        self.locate = function(user) {
            console.log('locate function was fired');
            self.master = angular.copy(user);
        };
    })
    /*.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/',{
            templateUrl:'/partials/home.html',
            controller:'indexLoginController',
            controllerAs:'loginCtrl'
        }).otherwise({
            redirectTo:'views/error.ejs'
        })
    }])*/