angular.module("positive")
	.controller('contatoCtrl', function ($scope, msgsAPI) {
		$scope.enviarMensagem = function (msg) {
			msg.data = new Date();

			$scope.info = {
				'classe': 'alert-dismissible alert-light',
				'texto': 'Enviando mensagem...'
			};

			msgsAPI.addMsg(msg).success(function (data) {
				delete $scope.msg;
				if (data.success) {
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
	
	.controller("msgsListCtrl", function ($scope, msgs, $rootScope, msgsAPI) {    
		$scope.msgs = msgs.data;

		$scope.selectMsg = function (msg) {
			$scope.selectedMsg = msg;
		}

		$scope.saveMsg = function (msg) {
			msgsAPI.updateMsg(msg).success(function (data) {
				delete $scope.msg;
				$scope.msgForm.$setPristine();
			});

			$location.path("/admin/mensagens");
		};

	})
