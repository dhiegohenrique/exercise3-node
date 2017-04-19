describe("ResultControllerSpec", function() {

    var $rootScope;
    var $scope;
    var weatherConditions = {"cod":200,"cityName":"Florianopolis","coord":{"lon":-48.55,"lat":-27.6},"main":{"temp":19,"pressure":1017,"humidity":93,"tempMin":19,"tempMax":19},"sys":{"country":"BR","sunrise":1492335142,"sunset":1492376078},"weather":{"main":"Rain","description":"light rain","icon":"10n"},"wind":{"speed":6.2}};

    beforeEach(function() {
        module("weatherapp");
        inject(function($injector, _$httpBackend_) {
            $rootScope = $injector.get("$rootScope");
            $scope = $rootScope.$new();
        });
    });

    it("Deve verificar se recebeu um weatherData válido.", inject(function($controller) {
        $controller("resultController", {$stateParams: {weatherData : weatherConditions}, "$scope": $scope});
        expect($scope.cityName).toBeDefined();
    }));
});