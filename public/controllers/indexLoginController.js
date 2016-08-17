angular.module('iemphourHome', [])
    .controller('indexLoginController', function(){
        console.log('Controller was loaded')
        var self = this;
        
        self.master = {};

        self.locate = function(user) {
            console.log('locate function was fired');
            self.master = angular.copy(user);
        };
    });
    /*.config(['$routeProvider', function ($routeProvider){
        $routeProvider.when('/', {
            templateUrl:'/home.html',
            controller:'indexLoginController'
        });
    }]);*/