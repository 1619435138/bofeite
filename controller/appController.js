angular.module('app')
	.controller('appController', ['$rootScope','$scope', '$state','$ionicHistory', function ($rootScope, $scope, $state, $ionicHistory) {

		$scope.back = function () {
			$ionicHistory.goBack();
		}

	//头部
		$scope.Header = true;

	//尾部
		$scope.Footer = true;

	//左边
		$scope.Left = true;

	//右边
		$scope.Right = true

	//二维码
		$scope.QrCode = true;

	//消息
		$scope.News = true;

	//左箭头
		$scope.LeftArrow = false;

	//刷新 分享
		$scope.Refresh = false;
		$scope.Share = false;

	//设置
		$scope.SetUp = false;

	//搜索框
		$scope.Search = true;

	//搜索
		$scope.SearchIcon = false;


	//  头部文字
		$scope.title = false;
		$scope.titleTXT = '';


	// 返回
		$scope.returnTO = function () {
			history.back();
		}



	}])