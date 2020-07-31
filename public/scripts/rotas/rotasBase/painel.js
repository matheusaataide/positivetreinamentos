angular.module('positive')
.config(function($routeProvider) {
    $routeProvider.when('/admin', {
        templateUrl: "./scripts/rotas/rotasBase/painel.html",
        controller: "painelCtrl",
        authorize: true,
        resolve: {
            acessos: function (acessosAPI) {
                return acessosAPI.getAcessos();
            }
        }
    });
})
.controller("painelCtrl", function ($scope, $http, acessos) { 
    var dados = acessos.data;

    $scope.acessos = dados;
    
    $scope.porSecao = { labels: [], data: [] };
    dados.porSecao.forEach(function (secao) {
        $scope.porSecao.labels.push(secao.tipoPagina);
        $scope.porSecao.data.push(secao.count);
    });
    
    $scope.porHorario = { labels: [], data: [] };
    dados.porHorario.forEach(function (horario) {
        $scope.porHorario.labels.push(horario.hora + 3); // Corrigindo para o fuso horário -03h00 (Brasília)
        $scope.porHorario.data.push(horario.total);
    });
    
    $scope.porDiaSemana = { labels: [], data: [] };
    var labelsDiaSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
    dados.porDiaSemana.forEach(function (dia) {
        $scope.porDiaSemana.labels.push(labelsDiaSemana[dia.diaSemana]);
        $scope.porDiaSemana.data.push(dia.total);
    });
    
    $scope.ultimas24h = dados.ultimas24h;
    $scope.ultimos7dias = dados.ultimos7dias;
    $scope.ultimos30dias = dados.ultimos30dias;
    
    $scope.top10paginas = dados.top10paginas;

   // $http.get(config.baseUrl + '/msgs').then(function (msgs) {
     //   $scope.msgs = msgs.data;
    //});

    //$http.get(config.baseUrl + '/subscribe').then(function (subs) {
        //$scope.subs = subs.data;
    //});

    $scope.colors = ['#2ba2cc', '#1cc88a', '#f6c23e', '#36b9cc', '#46BFBD', '#949FB1', '#00ADF9'];
    $scope.dataSetOverride =  {
        backgroundColor: ['#2ba2cc', '#1cc88a', '#f6c23e', '#36b9cc', '#46BFBD', '#949FB1', '#00ADF9'],
        hoverBackgroundColor: ['#22243a', '#822e2e', '#c66d00', '#2d1a2d', '#634d72', '#533253', '#B66734', '#AF561E'],
        hoverBorderColor: ['#22243a', '#822e2e', '#c66d00', '#2d1a2d', '#634d72', '#533253', '#B66734', '#AF561E']
    };
});