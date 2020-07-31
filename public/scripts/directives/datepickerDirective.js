angular.module('positive').directive('datepicker', function($filter) {
   return {
      restrict: 'A',
      require : 'ngModel',
      link: function(scope, element, attrs, ngModelCtrl) {
         $(element).datepicker({
            dateFormat:'dd-MM-yyyy',
            language: 'pt-BR',
            pickTime: false,
            startDate: '01-11-2020',      
            endDate: '01-11-2030'          
         }).on('changeDate', function(e) {
            ngModelCtrl.$setViewValue($filter('date')(e.date, 'dd MMM yy'));
            scope.$apply();
         });
     }
   };
 });