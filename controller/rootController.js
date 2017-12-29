angular.module('app')
	.controller('rootController', ['$state', '$rootScope', '$ionicHistory', function ($state, $rootScope, $ionicHistory) {

		$rootScope.back = function () {
			$ionicHistory.goBack();
		}

	}])