angular.module("positive")
	.controller('secoesCtrl', function ($scope,  sectionsAPI, transformations, ourStory, graduations, disciplina) {
		$scope.transformations = transformations.data;
		$scope.ourStory = ourStory.data;
		$scope.graduations = graduations.data;
		$scope.disciplina = disciplina.data;

		$scope.select = function (i) {
			$scope.selected = i;
		}
		$scope.saveSection = function (key, section) {
			sectionsAPI.saveSection(key, section);
		}

		$scope.addGraduation = function (member, grad) {
			grad.graduationMember = member;
			$scope.graduations[member].push(angular.copy(grad));
			delete $scope.newGradRafael;
		};
		$scope.saveGrad = function (member, grads) {
			sectionsAPI.saveGraduations(member, grads).then(function (data) {
				$scope.graduations = data.data;
			});
		}
	})

	.controller('transfPositiveCtrl', function ($scope, transformations) {
		$scope.transformations = transformations.data;
	})
	.controller('disciplinaCtrl', function ($scope, disciplina) {
		$scope.disciplina = disciplina.data;
	})
	.controller('quemSomosCtrl', function ($scope, ourStory, graduations) {
		$scope.ourStory = ourStory.data;
		$scope.graduations = graduations.data;
	})
	.controller('contatoCtrl', function ($scope, msgsAPI) {
		$scope.enviarMensagem = function (msg) {
            $scope.info = {
                'classe': 'alert-dismissible alert-light',
                'texto': 'Enviando mensagem...'
            };
            msgsAPI.addMsg(msg).then(function (data) {
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
	});
