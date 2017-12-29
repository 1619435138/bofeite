angular.module('app')
	.controller('personalController', ['$scope', function ($scope) {
		
	//头部
		$scope.Header = true;

	//尾部
		$scope.Footer = true;

	//左边
		$scope.Left = true;

	//右边
		$scope.Right = true

	//二维码
		$scope.QrCode = false;

	//消息
		$scope.News = false;

	//左箭头
		$scope.LeftArrow = true;

	//刷新 分享
		$scope.Refresh = false;
		$scope.Share = false;

	//设置
		$scope.SetUp = true;

	//搜索
		$scope.Search = false;


	//  头部文字
		$scope.title = true;
		$scope.titleTXT = '个人中心';


	

	}])