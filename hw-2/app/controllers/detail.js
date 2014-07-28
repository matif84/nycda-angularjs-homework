angular.module('questions').controller('Detail',
    ['$scope',
        function ($scope) {

            $scope.onSelectAnswer = function (question, option) {
                question.answer = option;
                  if (option.answer)
                  { alert("answer is correct") };

           };

        }]);