angular.module("positive").controller("staticPageListCtrl", function ($scope, staticPages) {    
    $scope.staticPages = staticPages.data;

});

angular.module("positive").controller("homepageCtrl", function ($scope, intro, acreditamos, staticPagesAPI) {
    $scope.intro = intro.data;
    $scope.acreditamos = acreditamos.data;
});

angular.module("positive").controller("quemSomosCtrl", function ($scope, staticPagesAPI) {
    $scope.historia = staticPagesAPI.getPage(1).data;
});

angular.module("positive").controller("disciplinaCtrl", function ($scope, staticPagesAPI) {
    $scope.historia = staticPagesAPI.getPage(1).data;
});
