angular.module("positive")
    .config(function($routeProvider, $locationProvider) {
        
        $routeProvider.when("/admin/agenda", {
            templateUrl: "./partials/admin/events/eventsList.html",
            controller: "eventsListCtrl",
            authorize: true,
            resolve: {
                events: function (eventsAPI) {
                    return eventsAPI.getEvents();
                }
            }
        });

        $routeProvider.when("/admin/agenda/novo", {
            templateUrl: "./partials/admin/events/eventsAdd.html",
            controller: "eventsAddCtrl",
            authorize: true
        });

        $routeProvider.when("/admin/agenda/editar/:eventId/", {
            templateUrl: "./partials/admin/events/eventsAdd.html",
            controller: "eventsUpdateCtrl",
            authorize: true,
            resolve: {
                thisEvent: function (eventsAPI, $route) {
                    return eventsAPI.getEvent($route.current.params.eventId);
                }
            }
        });

        $routeProvider.when("/agenda", {
            templateUrl: "./partials/events/events.html",
            controller: "eventsCtrl",
            resolve: {
                events: function (eventsAPI) {
                    return eventsAPI.getEvents();
                },
                views: function (eventsAPI) {
                    return eventsAPI.incrementViews(0);
                }
            }
        });

        $routeProvider.when("/agenda/:eventId/:slug", {
            templateUrl: "./partials/events/eventsDetail.html",
            controller: "eventsViewCtrl",
            resolve: {
                event: function (eventsAPI, $route) {
                    return eventsAPI.getEvent($route.current.params.eventId);
                },
                views: function (eventsAPI, $route) {
                    return eventsAPI.incrementViews($route.current.params.eventId);
                }
            }
        });
    });