angular.module('app')
	.controller('personalPlatformController', ['$rootScope', '$scope', '$state', '$ionicSlideBoxDelegate', function ($rootScope, $scope, $state, $ionicSlideBoxDelegate) {

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
		$scope.titleTXT = '平台信息';
	
	//  滚动页面	
		$scope.tabNames=['交易物流','通知','博友互动'];

		$scope.slectIndex=0;

		$scope.activeSlide=function(index){//点击时候触发
			$scope.slectIndex=index;
			$ionicSlideBoxDelegate.slide(index);
		};

		$scope.slideChanged=function(index){//滑动时候触发
			$scope.slectIndex=index;
		};

	//  ng-include  加载页面
		$scope.goodsPages = [
			{
				htmlUrl: 'template/personalPlatform/logistics.html',
				title: '平台信息 之 交易物流',
				className: 'logistics',
			},
			{
				htmlUrl: 'template/personalPlatform/notice.html',
				title: '平台信息 之 通知',
				className: 'notice',
			},
			{
				htmlUrl: 'template/personalPlatform/interact.html',
				title: '平台信息 之 博友互动',
				className: 'interact',
			}
			
		];



		//  博友互动
			$rootScope.onInteract = false;
			$rootScope.isInteract = true;

		
	}])