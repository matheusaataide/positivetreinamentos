angular.module("positive")
	.factory("eventsAPI", function ($http, config) {
		var _getEvents = function () {
			return $http.get(config.baseUrl + "/events");
		};

		var _getEvent = function (id) {
			return $http.get(config.baseUrl + "/events/" + id);
		};

		var _addEvent = function (event, file) { 
			return $http.post(config.baseUrl + "/events", event);
		};

		var _removeEvent = function (id) {
			return $http.delete(config.baseUrl + "/events/" + id)
		}

		var _updateEvent = function (event) {
			return $http.post(config.baseUrl + "/events/" + event.eventId, event);
		}
		var _incrementViews = function (id) {
			return $http.post(config.baseUrl + "/views/events/" + id);
		}

		return {
			getEvents: _getEvents,
			getEvent: _getEvent,
			addEvent: _addEvent,
			updateEvent: _updateEvent,
			removeEvent: _removeEvent,
			incrementViews: _incrementViews
		};
	});