angular.module('app')
	.controller('searchController', ['$scope', '$state', 'PopupConfirm', function ($scope, $state, PopupConfirm) {

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
		$scope.Refresh = false;
		$scope.Share = false;

	//设置
		$scope.SetUp = false;

	//搜索
		$scope.Search = true;

	//搜索文字
		$scope.searchTxt = true;

		
	
	// 历史记录
		$scope.history = [
			{name:'跑步机'},
			{name:'提肩'},
			{name:'智能 跑步机'},
			{name:'家用跑步机'},
		]

		$scope.confirm = {
			title: '历史记录',
			url: './service/templateUrl/PopupConfirm.html',
			cancelText: '取消',
			cancelType: 'button-assertive',
			okText: '确认',
			okType: 'back-color',
		};

		$scope.deleteConfirm = function () {
			PopupConfirm.Confirm($scope.confirm, function () {
				$scope.history = null;
			});

		};

	// 发现
		$scope.find = [
			{name:'多功能  跑步机'},
			{name:'BFT1056 提肩'},
			{name:'卧式T型'},
			{name:'哈克深蹲'},
			{name:'安卓智能 跑步机'},
		];
		$scope.isFind = true;

		$scope.hideFind = function () {
			$scope.isFind = !$scope.isFind;
			
		}

	//开始搜索
		$scope.searchName = '';
		$scope.goSearch = function (item) {
			console.log(item)
			$scope.searchName = item.name
		}

	//搜索商品
		$scope.toSearch = function(name) {
			
				$state.go('app.searchGoods',{name:name});
			
			//
		}

	}])