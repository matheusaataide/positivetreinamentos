angular.module("positive").config(function($routeProvider, $locationProvider){
    $routeProvider.when("/quem-somos", {
        templateUrl: "./scripts/rotas/rotasSecao/quemSomos.html",
        controller: "quemSomosCtrl",
        resolve: {
            acessos: function (acessosAPI, $location) {
                return acessosAPI.visualizar('Outros', 0, $location.path());
            }
        }
    });
    $routeProvider.when("/transformacoes-positive", {
        templateUrl: "./scripts/rotas/rotasSecao/transformacoes.html",
        controller: "transformacoesCtrl",
        resolve: {
            acessos: function (acessosAPI, $location) {
                return acessosAPI.visualizar('Outros', 0, $location.path());
            }
        }
    });
    $routeProvider.when("/disciplina-positiva", {
        templateUrl: "./scripts/rotas/rotasSecao/disciplina-positiva.html",
        controller: "disciplinaCtrl",
        resolve: {
            acessos: function (acessosAPI, $location) {
                return acessosAPI.visualizar('Outros', 0, $location.path());
            }
        }
    });
    $routeProvider.when("/contato", {
        templateUrl: "./scripts/rotas/rotasSecao/contato.html",
        controller: "contatoCtrl",
        resolve: {
            acessos: function (acessosAPI, $location) {
                return acessosAPI.visualizar('Outros', 0, $location.path());
            }
        }
    });
})
.controller("quemSomosCtrl", function ($scope) {    
})
.controller("transformacoesCtrl", function ($scope) {    
})
.controller("disciplinaCtrl", function ($scope) {    
})
.controller("contatoCtrl", function ($scope, mensagensAPI) {
    $scope.enviarMensagem = function (msg) {
        msg.data = new Date();

        $scope.info = {
            'classe': 'alert-dismissible alert-light',
            'texto': 'Enviando mensagem...'
        };

        mensagensAPI.adicionarMensagem(msg).success(function (data) {
            delete $scope.msg;
            if (data.sucesso) {
                $scope.info = {
                    'classe': 'alert-dismissible alert-success hidden',
                    'texto': 'Mensagem enviada. Responderemos assim que possível!'
                };
            } else {
                $scope.info = {
                    'classe': 'alert-dismissible alert-danger hidden',
                    'texto': 'Não conseguimos processar seu contato no momento. Que tal falarmos pelo Whatsapp (82) 99939 5433?.'
                };
            }
        });
    };
})