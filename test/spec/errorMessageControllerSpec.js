describe("ErrorMessageControllerSpec", function() {

    var $rootScope;
    var $scope;

    beforeEach(function() {
        module("weatherapp");
        inject(function($injector, _$httpBackend_) {
            $rootScope = $injector.get("$rootScope");
            $scope = $rootScope.$new();
        });
    });

    it("Deve verificar a mensagem de id 'errorMessage' está sendo exibida com o statusCode = 400.", inject(function($controller) {
        $rootScope.statusCode = 400;
        $controller("errorMessageController", {"$scope" : $scope, "$rootScope" : $rootScope});

        expect($scope.errorMessage).toEqual("errorMessage");
    }));

    it("Deve verificar a mensagem de id 'cityNotFound' está sendo exibida com o statusCode = 404.", inject(function($controller) {
        $rootScope.statusCode = 404;
        $controller("errorMessageController", {"$scope" : $scope, "$rootScope" : $rootScope});

        expect($scope.errorMessage).toEqual("cityNotFound");
    }));
});