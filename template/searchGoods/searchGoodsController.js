angular.module('app')
	.controller('searchGoodsController', ['$scope','$stateParams', 'PopupConfirm', function ($scope, $stateParams, PopupConfirm) {
	//消息
		$scope.News = true;

	//左箭头
		$scope.LeftArrow = true;

	//二维码
		$scope.QrCode = false;

		$scope.searchName=$stateParams.name;
		console.log($scope.searchName);
	}])