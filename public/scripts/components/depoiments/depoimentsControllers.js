
angular.module("positive")
	// ADMIN Listar depoiments
	.controller("depoimentsListCtrl", function ($scope, depoiments, $rootScope, depoimentsAPI) {    
		$scope.depoiments = depoiments.data;

		$scope.selectDepoiment = function (depoiment) {
			$scope.selectedDepo = depoiment;
		}
		$scope.deleteDepoiment = function (depoiment) {
			depoimentsAPI.removeDepoiment(depoiment.depoimentId).success(function (data) {
				$scope.depoiments = $scope.depoiments.filter(p => {
					if (p.depoimentId != depoiment.depoimentId) return p;
				});
				
				$scope.notification = {
					text: "O depoimento \"" + depoiment.depoimentTitle + "\" foi excluído permanentemente do sistema!",
					type: 'warning'
				};

				
			});
		};
	})

	.controller("depoimentsCtrl", function ($scope, depoiments) {    
		$scope.depoiments = depoiments.data;

		$scope.selectDepo = function (depo) {
			$scope.selectedDepo = depo;
		}
	})
		
	.controller("depoimentsAddCtrl", function ($scope, $location, $rootScope, depoimentsAPI, config, fileUploadService) {
		$scope.selectedFile = [];
		
		$scope.selectFile = function (e) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$scope.previewImage = e.target.result;
				$scope.$apply();
			};

			reader.readAsDataURL(e.target.files[0]);
		};
		$scope.uploadFile = function () {
			var file = $scope.file;
			var uploadUrl = config.baseUrl + "/upload", //Url of webservice/api/server
                promise = fileUploadService.uploadFileToUrl(file, uploadUrl);
 
            return promise.then(function (response) {
               		return response.filename;
            	}, function () {
               		$scope.serverResponse = 'An error has occurred';
            	});
		};

		$scope.saveDepoiment = async function (newDepoiment) {
			if ($scope.previewImage) {
				newDepoiment.depoimentImg = await $scope.uploadFile();
			} else {
				newDepoiment.depoimentImg = '';
			}

			depoimentsAPI.addDepoiment(newDepoiment).success(function (data) {
				delete $scope.depoiment;
				$scope.depoimentForm.$setPristine();
	
				$rootScope.notification = {
					text: "O depoimento '" + newDepoiment.depoimentTitle + "' já está disponível!",
					type: 'success'
				};
			});
			
			$location.path("/admin/depoimentos");
		};
	})

	.controller("depoimentsUpdateCtrl", function ($scope, $location, $rootScope, $filter, thisDepoiment, depoimentsAPI, config, fileUploadService) {
		$scope.depoiment = thisDepoiment.data;
		$scope.selectedFile = [];
		$scope.previewImage = config.publicUrl + thisDepoiment.data.depoimentImg;
		
		$scope.selectFile = function (e) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$scope.previewImage = e.target.result;
				$scope.$apply();
			};

			reader.readAsDataURL(e.target.files[0]);
		};
		$scope.uploadFile = function () {
			var file = $scope.file;
			var uploadUrl = config.baseUrl + "/upload", //Url of webservice/api/server
                promise = fileUploadService.uploadFileToUrl(file, uploadUrl);
 
            return promise.then(function (response) {
               	return response.filename;
            }, function () {
                $scope.serverResponse = 'An error has occurred';
            })
		};
		
		$scope.saveDepoiment = async function (depoiment) {
			if (depoiment.depoimentImg !== null &&
				 depoiment.depoimentImg !== '' && 
				 (config.publicUrl + depoiment.depoimentImg) !== $scope.previewImage) {
				depoiment.depoimentImg = await $scope.uploadFile();
			}

			depoimentsAPI.updateDepoiment(depoiment).success(function (data) {
				delete $scope.depoiment;
				$scope.depoimentForm.$setPristine();
	
				$rootScope.notification = {
					text: "O depoimento '" + depoiment.depoimentTitle + "' foi alterado!",
					type: 'success'
				};
			});

			$location.path("/admin/depoimentos");
		};
	})