// ADMIN Listar usuários
angular.module("positive")
    .config(['$routeProvider', function($routeProvider){        
        $routeProvider.when("/admin/mensagens", {
            templateUrl: "./scripts/rotas/rotasMensagem/adminMensagens.html",
            controller: "adminMensagensCtrl",
            authorize: true,
            resolve: {
                mensagens: function (mensagensAPI) {
                    return mensagensAPI.getMensagens(100);
                }
            }
        });
    }])
    .controller("adminMensagensCtrl", function ($scope, mensagens, mensagensAPI) {    
        $scope.mensagens = mensagens.data.rows;
        
        $scope.selecionarMensagem = function (msg) {
            $scope.mensagemSelecionada = msg;

            if (!msg.visualizada) {
                msg.visualizada = true;
                mensagensAPI.atualizarMensagem(msg).then(function (data) {
                    msg.visualizada = true;
                });
            }
        }
	});



