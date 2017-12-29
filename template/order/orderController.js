angular.module('app')
	.controller('orderController', ['$rootScope', '$scope', '$state', '$ionicSlideBoxDelegate', function ($rootScope, $scope, $state, $ionicSlideBoxDelegate) {

	//头部
		$scope.Header = true;

	//尾部
		$scope.Footer = false;

	//左边
		$scope.Left = true;

	//右边
		$scope.Right = true

	//二维码
		$scope.QrCode = false;

	//消息
		$scope.News = true;

	//左箭头
		$scope.LeftArrow = true;

	//刷新 分享
		$scope.Refresh = false;
		$scope.Share = false;

	//设置
		$scope.SetUp = false;

	//搜索框
		$scope.Search = false;

	//搜索
		$scope.SearchIcon = true;

	//  头部文字
		$scope.title = true;
		$scope.titleTXT = '我的订单';


	//  滚动页面	
		$scope.tabNames=['全部','待付款','待发货','待收货','待评价'];

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
				htmlUrl: 'template/order/orderAll.html',
				title: '我的订单 之 全部',
				className: 'orderAll',
			},
			{
				htmlUrl: 'template/order/orderPay.html',
				title: '我的订单 之 待付款',
				className: 'orderPay',
			},
			{
				htmlUrl: 'template/order/orderSend.html',
				title: '我的订单 之 待发货',
				className: 'orderSend',
			},
			{
				htmlUrl: 'template/order/orderCollect.html',
				title: '我的订单 之 待收货',
				className: 'orderCollect',
			},
			{
				htmlUrl: 'template/order/orderAssess.html',
				title: '我的订单 之 待评价',
				className: 'orderAssess',
			}
			
		];



	//  待付货
		$rootScope.onPayOrder = false;
		$rootScope.isPayOrder = true;

		
	}])