angular.module("positive").controller("messageAddCtrl", [
	'$scope',
	'$location',
	'$rootScope',
	'eventsAPI',
	'config',
	'fileUploadService',
	function ($scope, $location, $rootScope, eventsAPI, config, fileUploadService) {
		$scope.event = {
			eventDate: new Date().now,
			eventStatus: true,
			userId: 1
		};
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
			var uploadUrl = config.baseUrl + "/upload", //Url of webservice/api/server
                promise = fileUploadService.uploadFileToUrl(file, uploadUrl);
 
            return promise.then(function (response) {
				console.log(response);
               	return response.filename;
            }, function () {
                $scope.serverResponse = 'An error has occurred';
            })
		};
		
		$scope.saveEvent = async function (newEvent) {
			if ($scope.previewImage) {
				newEvent.eventImg = await $scope.uploadFile();
			} else {
				newEvent.eventImg = '';
			}

			eventsAPI.addEvent(newEvent).success(function (data) {
				delete $scope.event;
				$scope.eventForm.$setPristine();
	
				$rootScope.notification = {
					text: "O evento '" + newEvent.eventTitle + "' já está disponível!",
					type: 'success'
				};
			});
			
			$location.path("/admin/agenda");
		};
	}
]);

angular.module("positive").controller("messageUpdateCtrl", [
	'$scope',
	'$location',
	'$rootScope',
	'thisEvent',
	'eventsAPI',
	'config',
	'fileUploadService',
	function ($scope, $location, $rootScope, thisEvent, eventsAPI, config, fileUploadService) {
		$scope.event = thisEvent.data;
		$scope.selectedFile = [];
		$scope.previewImage = 'http://positivetreinamentos.com.br/' + thisEvent.data.eventImg;
		
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
			var uploadUrl = config.baseUrl + "/upload", //Url of webservice/api/server
                promise = fileUploadService.uploadFileToUrl(file, uploadUrl);
 
            return promise.then(function (response) {
				console.log(response);
               	return response.filename;
            }, function () {
                $scope.serverResponse = 'An error has occurred';
            })
		};
		
		$scope.saveEvent = async function (event) {
			if (event.eventImg !== null &&
				 event.eventImg !== '' && 
				 ('http://positivetreinamentos.com.br/' + event.eventImg) !== $scope.previewImage) {
				event.eventImg = await $scope.uploadFile();
			}

			eventsAPI.updateEvent(event).success(function (data) {
				delete $scope.event;
				$scope.eventForm.$setPristine();
	
				$rootScope.notification = {
					text: "O evento '" + event.eventTitle + "' foi alterado!",
					type: 'success'
				};
			});

			$location.path("/admin/agenda");
		};
	}
]);

angular.module("positive").controller("messageViewController", function ($scope, $routeParams, event) {
	$scope.event = event.data;
	incrementViews(event.data);

	function incrementViews (p) {
		p.eventViews++; 
		eventsAPI.updateEvent(p).success(function (data) {});
	}
});

angular.module("positive").controller("messageListCtrl", function ($scope, events, $rootScope, eventsAPI) {    
    $scope.events = events.data;

	$scope.selectEvent = function (event) {
		$scope.selectedEvent = event;
	}
	$scope.deleteEvent = function (event) {
		eventsAPI.removeEvent(event.eventId).success(function (data) {
			$scope.events = $scope.events.filter(p => {
				if (p.eventId != event.eventId) return p;
			});
			
			$scope.notification = {
				text: "O evento \"" + event.eventTitle + "\" foi excluído permanentemente do sistema!",
				type: 'warning'
			};

			
		});
	};
	$scope.hideEvent = function (event) {
		event.eventStatus = false;
		eventsAPI.updateEvent(event).success(function (data) {
			delete $scope.event;
			$scope.eventForm.$setPristine();
		});
		$rootScope.notification = {};
	};
	$scope.verifySelectedEvent = function (events) {
		$scope.hasSelectedEvent = events.some(function (event) {
			return event.selected;
		});
	};
	$scope.orderBy = function (field) {
		$scope.criteria = field;
		$scope.orderCriteria = !$scope.orderCriteria;
	};
});


