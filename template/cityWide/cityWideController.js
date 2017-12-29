angular.module('app')
	.controller('cityWideController', ['$scope', 'Loading', '$timeout', function ($scope, Loading, $timeout) {
		
	
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
		$scope.News = false;

	//左箭头
		$scope.LeftArrow = true;

	//刷新 分享
		$scope.Refresh = true;
		$scope.Share = true;

	//设置
		$scope.SetUp = false;

	//搜索框
		$scope.Search = false;

	//搜索
		$scope.SearchIcon = false;

	//  头部文字
		$scope.title = true;
		$scope.titleTXT = '同城团购';


	

	//  加载
	$scope.isShow = false;
		$scope.loadingData = {
			url: './service/templateUrl/Loading.html',
		}

		Loading.showLoading($scope.loadingData);
		
		$timeout(function() {
			Loading.hideLoading();
			$scope.isShow = !$scope.isShow;
		}, 4000);
	

	//  同城商品
		$scope.goods = [
			{
				product: [
						{
							imgUrl: './public/images/product/city-buy-01.png',
			    			name: 'BSE06外贸品质商用动感单车 多功能磁控',
			    			number: 2,
			    			group: 149.50,
			    			single: 269.00,
			    			overplus: 60,
			    			progressBar: 40,
			    			limited: 300, 
						},
						{
							imgUrl: './public/images/product/city-buy-01.png',
			    			name: 'BSE06外贸品质商用动感单车 多功能磁控',
			    			number: 20,
			    			group: 149.50,
			    			single: 269.00,
			    			overplus: 40,
			    			progressBar: 60,
			    			limited: 300, 
						},
						{
							imgUrl: './public/images/product/city-buy-01.png',
			    			name: 'BSE06外贸品质商用动感单车 多功能磁控',
			    			number: 12,
			    			group: 149.50,
			    			single: 269.00,
			    			overplus: 20,
			    			progressBar: 80,
			    			limited: 300, 
						},
						{
							imgUrl: './public/images/product/city-buy-01.png',
			    			name: 'BSE06外贸品质商用动感单车 多功能磁控',
			    			number: 22,
			    			group: 149.50,
			    			single: 269.00,
			    			overplus: 70,
			    			progressBar: 30,
			    			limited: 300, 
						},
					],
				name: '你喜欢的 | YOU LOVE'
			},
			{
				product: [
						{
							imgUrl: './public/images/product/city-buy-01.png',
			    			name: 'BSE06外贸品质商用动感单车 多功能磁控',
			    			number: 29,
			    			group: 149.50,
			    			single: 269.00,
			    			overplus: 70,
			    			progressBar: 30,
			    			limited: 300, 
						},
						{
							imgUrl: './public/images/product/city-buy-01.png',
			    			name: 'BSE06外贸品质商用动感单车 多功能磁控',
			    			number: 20,
			    			group: 149.50,
			    			single: 269.00,
			    			overplus: 40,
			    			progressBar: 60,
			    			limited: 300, 
						},
						{
							imgUrl: './public/images/product/city-buy-01.png',
			    			name: 'BSE06外贸品质商用动感单车 多功能磁控',
			    			number: 92,
			    			group: 149.50,
			    			single: 269.00,
			    			overplus: 80,
			    			progressBar: 20,
			    			limited: 300, 
						},
						{
							imgUrl: './public/images/product/city-buy-01.png',
			    			name: 'BSE06外贸品质商用动感单车 多功能磁控',
			    			number: 62,
			    			group: 149.50,
			    			single: 269.00,
			    			overplus: 70,
			    			progressBar: 30,
			    			limited: 300, 
						}
					],
				name: '周团 | WEEK'
			}
			
		];



	}])