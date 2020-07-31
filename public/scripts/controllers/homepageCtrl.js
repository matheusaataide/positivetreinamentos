angular.module('positive')
    .controller("homepageCtrl", function ($scope, $http, msgsAPI, lastPosts, depoiments, config) {    
        $scope.testando = "teste";

        $http.post(config.baseUrl + "/views/home/" + 0);

        $scope.posts = lastPosts.data;
        $scope.depoiments = depoiments.data;

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
    })
    .controller("dashboardCtrl", function ($scope, $http, config) {    
        $scope.testando = "teste";

        $http.get(config.baseUrl + '/views').then(function (views) {
            $scope.views = views.data;
            var acessos = views.data.bySection;
            $scope.labels = [];
            $scope.data = [];

            acessos.forEach(function (acesso) {
                $scope.labels.push(acesso.typePage);
                $scope.data.push(acesso.count);
            })
            $scope.viewsToday = {
                total: views.data.last24hrs.current,
                difference: views.data.last24hrs.current - views.data.last24hrs.previous,
                percent: views.data.last24hrs.previous > 0 ? ((views.data.last24hrs.current * 100) / views.data.last24hrs.previous) - 100 : views.data.last24hrs.current * 100
            };
            $scope.viewsWeek = {
                total: views.data.lastWeek.current,
                difference: views.data.lastWeek.current - views.data.lastWeek.previous,
                percent: views.data.lastWeek.previous > 0 ? ((views.data.lastWeek.current * 100) / views.data.lastWeek.previous) - 100 : views.data.lastWeek.current * 100
            
            };
            $scope.viewsMonth = {
                total: views.data.lastMonth.current,
                difference: views.data.lastMonth.current - views.data.lastMonth.previous,
                percent: views.data.lastMonth.previous > 0 ? ((views.data.lastMonth.current * 100) / views.data.lastMonth.previous) - 100 : views.data.lastMonth.current * 100
            
            };
        });

        $http.get(config.baseUrl + '/msgs').then(function (msgs) {
            $scope.msgs = msgs.data;
        });

        $http.get(config.baseUrl + '/subscribe').then(function (subs) {
            $scope.subs = subs.data;
        });

        $scope.colors = ['#2ba2cc', '#1cc88a', '#f6c23e', '#36b9cc', '#46BFBD', '#949FB1', '#00ADF9'];
        $scope.dataSetOverride =  {
            backgroundColor: ['#2ba2cc', '#1cc88a', '#f6c23e', '#36b9cc', '#46BFBD', '#949FB1', '#00ADF9'],
            hoverBackgroundColor: ['#22243a', '#822e2e', '#c66d00', '#2d1a2d', '#634d72', '#533253', '#B66734', '#AF561E'],
            hoverBorderColor: ['#22243a', '#822e2e', '#c66d00', '#2d1a2d', '#634d72', '#533253', '#B66734', '#AF561E']
        };
    });