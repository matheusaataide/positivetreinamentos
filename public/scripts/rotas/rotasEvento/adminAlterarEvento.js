angular.module("positive").config(function($routeProvider, $locationProvider){
    $routeProvider.when("/admin/agenda/novo", {
        templateUrl: "./scripts/rotas/rotasEvento/adminAlterarEvento.html",
        controller: "adminAdicionarEventoCtrl",
        authorize: true
    });
    $routeProvider.when("/admin/agenda/editar/:id", {
        templateUrl: "./scripts/rotas/rotasEvento/adminAlterarEvento.html",
        controller: "adminAlterarEventoCtrl",
        authorize: true,
        resolve: {
            evento: function (eventosAPI, $route) {
                return eventosAPI.getEvento($route.current.params.id);
            }
        }
    });
})
// ADMIN Criar postagem
.controller("adminAdicionarEventoCtrl", function ($scope, $location, $rootScope, eventosAPI, config, fileUploadService) {
    $scope.evento = { status: true };
    
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
    
    $scope.salvarEvento = function (novoEvento) {
        if ($scope.previewImage) {
            $scope.uploadFile().then(function (data) {
                novoEvento.imagem = data;

                eventosAPI.adicionarEvento(novoEvento).success(function (data) {
                    delete $scope.evento;
                    $scope.agendaForm.$setPristine();
        
                    $rootScope.notification = {
                        text: "A publicação '" + novoEvento.titulo + "' já está disponível!",
                        type: 'success'
                    };
        
                    $location.path("/admin/agenda");
                });
            });
        } 
    };
})

// ADMIN Atualizar postagem
.controller("adminAlterarEventoCtrl", function ($scope, $location, $rootScope, evento, eventosAPI, config, fileUploadService) {
    $scope.evento = evento.data;
    $scope.previewImage = $scope.evento.imagem;
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
        var uploadUrl = config.baseUrl + "/tmp",
            promise = fileUploadService.uploadFileToUrl(file, uploadUrl);

        return promise.then(function (response) {
               return response.filename;
        }, function () {
            $scope.serverResponse = 'An error has occurred';
        })
    };
    
    $scope.salvarEvento = async function (eventoAlterado) {
        if (eventoAlterado.imagem !== null &&
            eventoAlterado.imagem !== '' && 
            eventoAlterado.imagem !== $scope.previewImage) {
            
            eventoAlterado.imagem = await $scope.uploadFile();
        }

        eventosAPI.atualizarEvento(eventoAlterado).success(function (data) {
            delete $scope.evento;
            $scope.agendaForm.$setPristine();

            $rootScope.notification = {
                text: "O evento '" + eventoAlterado.nome + "' foi alterado!",
                type: 'success'
            };

            $location.path("/admin/agenda");
        });
    };
})
