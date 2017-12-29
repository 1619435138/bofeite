angular.module('app')
	.controller('goodsController', ['$rootScope', '$scope', '$state', '$ionicSlideBoxDelegate', function ($rootScope, $scope, $state, $ionicSlideBoxDelegate) {

	//  滚动页面	
		$scope.tabNames=['商品','详情','评价'];

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
				htmlUrl: 'template/goods/goodsDetail.html',
				title: '商品详情 之 商品',
				className: 'goodsDetail',
			},
			{
				htmlUrl: 'template/goods/goodsDesc.html',
				title: '商品详情 之 商品介绍',
				className: 'goodsDesc',
			},
			{
				htmlUrl: 'template/goods/goodseValuate.html',
				title: '商品详情 之 评价',
				className: 'goodseValuate',
			},
			
		];

		//商品详情 之 商品

			//  轮播
				$scope.goodsBanner = [
					{
						name: '',
						imgUrl: './public/images/banner/banner-01.jpg',
					},
					{
						name: '',
						imgUrl: './public/images/banner/banner-02.jpg',
					},
					{
						name: '',
						imgUrl: './public/images/banner/banner-03.jpg',
					},
					{
						name: '',
						imgUrl: './public/images/banner/banner-04.jpg',
					},
				];






		//商品详情 之 详情 
			$scope.goodsDetails = ['商品介绍','规格参数','包装售后'];


	// 返回
		$scope.returnTO = function () {
			history.back();
		}

		
	}])