"use strict";

angular.module("weatherapp").controller("weatherController", ["$scope", "$translate", "weatherService", "languages", "$state", "translateService", "$q", weatherController]);

function weatherController($scope, $translate, weatherService, languages, $state, translateService, $q) {
    $scope.changeLanguage = function() {
        var promiseTranslate = $translate.use($scope.idLanguage);
        var promiseTranslateService = translateService.getTranslateDescription($scope.description, $scope.idLanguage);

        $q.all([promiseTranslate, promiseTranslateService])
            .then(function(results) {
                $scope.$broadcast("changeLanguage", results[1]);
            });
    };

    $scope.submitForm = function(isValid) {
        if (!isValid) {
            return;
        }

        $scope.spinner = true;
        $scope.searchDate = new Date();

        weatherService.getWeather($scope.city, $scope.idLanguage)
            .then(function(response) {
                response.searchDate = $scope.searchDate;
                $state.go("result", {"weatherData" : response});
            })
            .finally(function(){
                $scope.spinner = false;
            });
    };

    $scope.$on("weatherDescription", function(event, description) {
        $scope.description = description;
    });

    var init = function() {
        $scope.languages = languages;
        $scope.idLanguage = languages[0].id;
    };

    init();
};