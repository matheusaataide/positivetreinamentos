angular.module('positive')
    .factory('authService', function ($location, $localStorage, $q, usuariosAPI) {
        return {
            getToken : function () {
                return $localStorage.token;
            },
            setToken: function (token) {
                $localStorage.token = token;
            },
            getUsuarioAtivo: function () {
                return $localStorage.usuario;
            },
            signin : function (params) {
                var informacao = {};
                usuariosAPI.fazerLogin(params).then(function (result) {
                    const info = result.data;
                    
                    if (info.hasSuccess) {
                        $localStorage.usuario = info.usuario; 
                        $localStorage.token = info.token;
                        $location.path('/admin');
                    } else {
                        informacao = info;
                    }
                });
                return informacao;
            },
            logout : function () {
                delete $localStorage.token;
                delete $localStorage.usuario;
                $q.when();
            }
        };
    });