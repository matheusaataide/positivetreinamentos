angular.module('positive', ['ngRoute', 'ngMessages', 'ngCookies', 'simditor', 'ngStorage', 'ngSanitize', 'updateMeta', 'chart.js'])
    .value("config", {
        baseUrl: "http://matheusataide.com.br/api/positive",
        publicUrl: "http://positivetreinamentos.com.br/"
    })
    .config(function($routeProvider, $locationProvider) {  
        $routeProvider.when("/pagina-nao-encontrada", {
            templateUrl: "./partials/error404.html"
        });

        // $routeProvider.otherwise('/pagina-nao-encontrada');

        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode({
            enabled: true, 
            requireBase: false,
          });
    })
    .run(function ($rootScope, $location, authService) {
        // Ao alterar rota 
        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            if (next !== undefined) {
                // Caso seja uma rota segura
                if (next.authorize) {

                    // Se não houver token 
                    if (!authService.getToken()) {       
                        
                        // Redireciona para página de login
                        $rootScope.$evalAsync(function () {
                            $location.path('/login');
                        });
                    }
                }

                if ($location.path() === '/login' && authService.getToken()) {
                    $location.path('/admin');
                }
            }
        });
    });


