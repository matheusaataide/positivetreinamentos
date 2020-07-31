angular.module("positive")
    .config(function($routeProvider, $locationProvider) {
        
        $routeProvider.when("/admin/depoimentos", {
            templateUrl: "./partials/admin/depoiments/depoimentsList.html",
            controller: "depoimentsListCtrl",
            authorize: true,
            resolve: {
                depoiments: function (depoimentsAPI) {
                    return depoimentsAPI.getDepoiments();
                }
            }
        });

        $routeProvider.when("/admin/depoimentos/novo", {
            templateUrl: "./partials/admin/depoiments/depoimentsAdd.html",
            controller: "depoimentsAddCtrl",
            authorize: true
        });

        $routeProvider.when("/admin/depoimentos/editar/:depoimentId/", {
            templateUrl: "./partials/admin/depoiments/depoimentsAdd.html",
            controller: "depoimentsUpdateCtrl",
            authorize: true,
            resolve: {
                thisDepoiment: function (depoimentsAPI, $route) {
                    return depoimentsAPI.getDepoiment($route.current.params.depoimentId);
                }
            }
        });

        $routeProvider.when("/depoimentos", {
            templateUrl: "./partials/depoiments/depoiments.html",
            controller: "depoimentsCtrl",
            resolve: {
                depoiments: function (depoimentsAPI) {
                    return depoimentsAPI.getDepoiments();
                }
            }
        });
    });