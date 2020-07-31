angular.module('positive')
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: "./scripts/rotas/rotasBase/inicio.html",
            controller: "inicioCtrl",
            resolve: {
                ultimasPostagens: function (postagensAPI) {
                    return postagensAPI.getPostagens(3, false);
                },
                depoimentos: function (depoimentosAPI) {
                    return depoimentosAPI.getDepoimentos();
                },
                acessos: function (acessosAPI, $location) {
                    return acessosAPI.visualizar('Página Inicial', 0, $location.path());
                }
            }
        });
    })
    .controller('inicioCtrl', function ($scope, $location, $http, mensagensAPI, ultimasPostagens, depoimentos, config) {    
        $scope.postagens = ultimasPostagens.data.rows;
        $scope.depoimentos = depoimentos.data;

        $scope.enviarMensagem = function (msg) {
            $scope.info = {
                'classe': 'alert-dismissible alert-light',
                'texto': 'Enviando mensagem...'
            };
            mensagensAPI.adicionarMensagem(msg).then(function (data) {
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

        $scope.selecionarDepoimento = function (depo) {
            $scope.depoSelecionado = depo;
        };
    });