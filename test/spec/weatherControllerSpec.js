describe("WeatherControllerSpec", function() {

    var $rootScope;
    var $scope;

    beforeEach(function() {
        module("weatherapp");
        inject(function($injector, _$httpBackend_) {
            $rootScope = $injector.get("$rootScope");
            $scope = $rootScope.$new();
        });
    });

    it("Deve verificar se o formulário está sendo validado.", inject(function($controller) {
        $controller("weatherController", {"$scope" : $scope});

        $scope.submitForm(null);

        expect($scope.searchDate).toBeUndefined();
    }));

    it("Deve verificar se as linguagens foram carregadas.", inject(function($controller) {
        $controller("weatherController", {"$scope" : $scope});
        expect($scope.languages).toBeDefined();
    }));

    it("Deve verificar se o recebeu a descrição quanto o $emit é invocado.", inject(function($controller) {
        $controller("weatherController", {"$scope" : $scope});

        $rootScope.$broadcast("weatherDescription", "descrição");
        expect($scope.description).toBeDefined();
    }));

    it("Deve verificar se a linguagem foi trocada.", inject(function($controller) {
        $controller("weatherController", {"$scope" : $scope});

        var defaultLang = $scope.idLanguage;
        $scope.idLanguage = $scope.languages[$scope.languages.length - 1].id;

        expect(defaultLang).not.toEqual($scope.idLanguage);
    }));
});