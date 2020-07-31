angular.module("positive").config(function($routeProvider, $locationProvider){
    $routeProvider.when("/agenda", {
        templateUrl: "./scripts/rotas/rotasEvento/agenda.html",
        controller: "agendaCtrl",
        resolve: {
            eventos: function (eventosAPI) {
                return eventosAPI.getEventos(10, false);
            },
            anuncio: function (secoesAPI) {
                return secoesAPI.getSecaoPorChave('anuncio');
            },
            acessos: function (acessosAPI, $location) {
                return acessosAPI.visualizar('Agenda', 0, $location.path());
            }
        }
    });
})
.controller("agendaCtrl", function ($scope, eventos, anuncio) { 
    console.log(eventos.data.rows);
    $scope.eventos = eventos.data.rows;
    $scope.anuncio = anuncio.data;
});
