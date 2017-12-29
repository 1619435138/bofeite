angular.module('app')
	.controller('orderDetailsController', ['$scope', function ($scope) {

	//搜索框
		$scope.Search = false;
	//消息
		$scope.News = false;
	//二维码
		$scope.QrCode = false;
	//左箭头
		$scope.LeftArrow = true;

	//  头部文字
		$scope.title = true;
		$scope.titleTXT = '订单详情';

	}])