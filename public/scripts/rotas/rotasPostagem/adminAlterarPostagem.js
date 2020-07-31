angular.module("positive").config(function($routeProvider, $locationProvider){
    $routeProvider.when("/admin/blog/postar", {
        templateUrl: "./scripts/rotas/rotasPostagem/adminAlterarPostagem.html",
        controller: "adminAdicionarPostagemCtrl",
        authorize: true
    });
    $routeProvider.when("/admin/blog/editar/:id", {
        templateUrl: "./scripts/rotas/rotasPostagem/adminAlterarPostagem.html",
        controller: "adminAlterarPostagemCtrl",
        authorize: true,
        resolve: {
            postagem: function (postagensAPI, $route) {
                return postagensAPI.getPostagem($route.current.params.id);
            }
        }
    });
})
// ADMIN Criar postagem
.controller("adminAdicionarPostagemCtrl", function ($scope, $location, $rootScope, postagensAPI, config, fileUploadService) {
    $scope.postagem = { status: true };
    
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
        var uploadUrl = config.baseUrl + "/upload";

        return fileUploadService.uploadFileToUrl(file, uploadUrl).then(function (response) {
            return response.arquivo;
        }, function () {
            $scope.serverResponse = 'Tivemos problemas com o upload.';
            return '';
        })
    };
    
    $scope.salvarPostagem = function (novaPostagem) {
        if ($scope.previewImage) {
            $scope.uploadFile().then(function (data) {
                novaPostagem.imagem = data;

                postagensAPI.adicionarPostagem(novaPostagem).success(function (data) {
                    delete $scope.postagem;
                    $scope.blogForm.$setPristine();
        
                    $rootScope.notification = {
                        text: "A publicação '" + novaPostagem.titulo + "' já está disponível!",
                        type: 'success'
                    };
        
                    $location.path("/admin/blog");
                });
            });
        } 
    };
})

// ADMIN Atualizar postagem
.controller("adminAlterarPostagemCtrl", function ($scope, $location, $rootScope, postagem, postagensAPI, config, fileUploadService) {
    $scope.postagem = postagem.data.postagem;
    $scope.previewImage = $scope.postagem.imagem;
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
            $scope.serverResponse = 'An error has occurred';
        })
    };
    $scope.salvarPostagem = async function (post) {
        post.imagem = await $scope.uploadFile();
        console.log(post.imagem);

        postagensAPI.atualizarPostagem(post).success(function (data) {
            delete $scope.postagem;
            $scope.blogForm.$setPristine();

            $rootScope.notification = {
                text: "A publicação '" + postagem.titulo + "' foi alterada!",
                type: 'success'
            };

            $location.path("/admin/blog");
        });
    };
})
