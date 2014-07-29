'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hw3App
 */
angular.module('hw3App')
  .controller('SearchCtrl', ['$scope', '$http', '$q' ,function ($scope,$http,$q) {

        $scope.keyword = "North Korea";
        var clearError = function(result) {
            $scope.error = "";
            return result;
        };

        var applyData = function(result) {
            var Articles=result.data.response.docs
            $scope.Articles = Articles;

        };
        var rejected = function(error) {
            $scope.error = error.message;
        };

        var getArticles = function() {
            var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + $scope.keyword + "&api-key=052861d142cf4eb7fa12bb79781fdbe1:11:69591426";
            var promise = $http({
                method: 'GET',
                // https://jsonp.nodejitsu.com
                url: "https://jsonp.nodejitsu.com/?url=" + encodeURIComponent(url)
            });

            promise.success(clearError).then(applyData);
            promise.error(function(error) {
                $scope.error = error.message;
            });
        };
        getArticles();

        $scope.getArticles = _.debounce(getArticles, 300);

  }]);






