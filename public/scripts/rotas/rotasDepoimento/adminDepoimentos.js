angular.module("positive").config(function($routeProvider, $locationProvider){
    $routeProvider.when("/admin/depoimentos", {
        templateUrl: "./scripts/rotas/rotasDepoimento/adminDepoimentos.html",
        controller: "adminDepoimentosCtrl",
        authorize: true,
        resolve: {
            depoimentos: function (depoimentosAPI) {
                return depoimentosAPI.getDepoimentos();
            }
        }
    });
})
.controller("adminDepoimentosCtrl", function ($scope, $location, depoimentos, depoimentosAPI, config, fileUploadService) {
    $scope.depoimentos = depoimentos.data;
    
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
        var uploadUrl = config.baseUrl + "/upload",
            promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

        return promise.then(function (response) {
            return response.arquivo;
        }, function () {
            $scope.serverResponse = 'Tivemos problemas com o upload.';
            return '';
        })
    };
    
    $scope.selecionarDepoimento = function (depo) {
        $scope.depoSelecionado = depo;
    }

    $scope.excluirDepoimento = function (depo) {
        depoimentosAPI.excluirDepoimento(depo.id).then(function(data) {});
    }
    $scope.salvarDepoimento = function (depo) {
        if ($scope.previewImage) {
            $scope.uploadFile().then(function (data) {
                depo.imagem = data;

                depoimentosAPI.adicionarDepoimento(depo).success(function (data) {
                    delete $scope.depoimento;
                    $scope.depoimentosForm.$setPristine();
                    $location.path("/admin/depoimentos");
                });
            });
        } 
    };
});
