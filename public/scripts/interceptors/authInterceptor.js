angular.module('positive')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push("authInterceptor");
    })
    .factory('authInterceptor', function ($location, $injector, $q) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
        
                const token = $injector.get('authService').getToken();
                if (token) {
                    config.headers['Authorization'] = 'Bearer ' + token;
                }
    
                return config;
            },
    
            responseError: function(response) {
                if (response.status === 401 || response.status === 403) {
                    $location.path('/login');
                }
        
                return $q.reject(response);
            }
        }
    });