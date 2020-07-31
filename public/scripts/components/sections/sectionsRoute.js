angular.module('positive')
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/admin/paginas', {
                templateUrl: "./partials/admin/sections/secoes.html",
                controller: 'secoesCtrl',
                resolve: {
                    ourStory: function (sectionsAPI) {
                        return sectionsAPI.getSection('historia');
                    },
                    graduations: function (sectionsAPI) {
                        return sectionsAPI.getGraduations();
                    },
                    transformations: function (sectionsAPI) {
                        return sectionsAPI.getTransformations();
                    },
                    disciplina: function (sectionsAPI) {
                        return sectionsAPI.getSection('disciplina')
                    }
                }
            })

            .when('/quem-somos', {
                templateUrl: "./partials/sections/quem-somos.html",
                controller: 'quemSomosCtrl',
                resolve: {
                    ourStory: function (sectionsAPI) {
                        return sectionsAPI.getSection('historia');
                    },
                    graduations: function (sectionsAPI) {
                        return sectionsAPI.getGraduations();
                    },
                    views: function (sectionsAPI, $route) {
                        return sectionsAPI.incrementViews(0);
                    }
                }
                
            })
            .when('/transformacoes-positive', {
                templateUrl: "./partials/sections/transformacoes.html",
                controller: "transfPositiveCtrl",
                resolve: {
                    transformations: function (sectionsAPI) {
                        return sectionsAPI.getTransformations();
                    },
                    views: function (sectionsAPI, $route) {
                        return sectionsAPI.incrementViews(0);
                    }
                }
            })
            .when('/disciplina-positiva', {
                templateUrl: "./partials/sections/disciplina-positiva.html",
                controller: "disciplinaCtrl",
                resolve: {
                    disciplina: function (sectionsAPI) {
                        return sectionsAPI.getSection('disciplina');
                    },
                    views: function (sectionsAPI, $route) {
                        return sectionsAPI.incrementViews(0);
                    }
                }
            })
            .when('/contato', {
                templateUrl: "./partials/sections/contato.html",
                controller: "contatoCtrl",
                resolve: {
                    views: function (sectionsAPI, $route) {
                        return sectionsAPI.incrementViews(0);
                    }
                }
            });
    });