'use strict';

angular.module('myappApp')
    .controller('BookDetailController', function ($scope, $rootScope, $stateParams, entity, Book) {
        $scope.book = entity;
        $scope.load = function (id) {
            Book.get({id: id}, function(result) {
                $scope.book = result;
            });
        };
        var unsubscribe = $rootScope.$on('myappApp:bookUpdate', function(event, result) {
            $scope.book = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
