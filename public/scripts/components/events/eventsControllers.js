function formatDateToSave(date) {
	var parts = date.split(' ');
	return parts[2] + "-" + parts[1] + "-" + parts[0];
}

angular.module("positive")
	// ADMIN Listar events
	.controller("eventsListCtrl", function ($scope, events, $rootScope, eventsAPI) {    
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
				$scope.eventsForm.$setPristine();
			});
			$rootScope.notification = {};
		};
	})

	.controller("eventsViewCtrl", function ($scope, $routeParams, eventsAPI, event, views) {
		$scope.event = event.data;

	})

	.controller("eventsCtrl", function ($scope, events) {    
		$scope.events = events.data;
	})
		
	.controller("eventsAddCtrl", function ($scope, $location, $rootScope, eventsAPI, config, fileUploadService) {
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
               		return response.filename;
            	}, function () {
               		$scope.serverResponse = 'An error has occurred';
            	});
		};

		$scope.saveEvent = async function (newEvent) {
			if ($scope.previewImage) {
				newEvent.eventImg = await $scope.uploadFile();
			} else {
				newEvent.eventImg = '';
			}
			
			if (!$scope.oneMoreDay) {
				newEvent.eventDateEnd = newEvent.eventDateStart;
			} 

			eventsAPI.addEvent(newEvent).success(function (data) {
				delete $scope.event;
	
				$rootScope.notification = {
					text: "O evento '" + newEvent.eventTitle + "' já está disponível!",
					type: 'success'
				};
			});
			
			$location.path("/admin/agenda");
		};
	})

	.controller("eventsUpdateCtrl", function ($scope, $location, $rootScope, $filter, thisEvent, eventsAPI, config, fileUploadService) {
		$scope.event = thisEvent.data;
		$scope.selectedFile = [];
		$scope.previewImage = config.publicUrl + thisEvent.data.eventImg;
		$scope.event.eventDate = $filter('date')($scope.event.eventDate, 'dd MM yyyy');
		
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
               	return response.filename;
            }, function () {
                $scope.serverResponse = 'An error has occurred';
            })
		};
		
		$scope.saveEvent = async function (event) {
			if (event.eventImg !== null &&
				 event.eventImg !== '' && 
				 (config.publicUrl + event.eventImg) !== $scope.previewImage) {
				event.eventImg = await $scope.uploadFile();
			}

			if (!$scope.oneMoreDay) {
				event.eventDateEnd = event.eventDateStart;
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
	})