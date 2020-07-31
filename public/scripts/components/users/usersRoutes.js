angular.module("positive")
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, $cookieStore){        
        // ADMIN Listar usuários
        $routeProvider.when("/admin/usuarios", {
            templateUrl: "./partials/admin/users/usersList.html",
            controller: "usersListCtrl",
            resolve: {
                users: function (usersAPI) {
                    return usersAPI.getUsers();
                }
            }
        });
        
        // ADMIN Criar novo usuário
        $routeProvider.when("/admin/usuarios/novo", {
            templateUrl: "./partials/users/usersAdd.html",
            controller: "usersAddCtrl",
            authorize: true
        });
        
        // ADMIN Editar usuário
        $routeProvider.when("/admin/usuarios/editar/:idUser/", {
            templateUrl: "./partials/users/usersAdd.html",
            controller: "usersUpdateCtrl",
            authorize: true,
            resolve: {
                thisUser: function (usersAPI, $route) {
                    return usersAPI.getUser($route.current.params.idUser);
                }
            }
        });

        $routeProvider.when("/admin/perfil", {
            templateUrl: "./partials/users/usersAdd.html",
            controller: "usersUpdateCtrl",
            authorize: true,
            resolve: {
                thisUser: function (usersAPI, $route) {
                    return usersAPI.getUser($route.current.params.idUser);
                }
            }
        })
    }]);