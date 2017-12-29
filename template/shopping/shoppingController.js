angular.module('app')
	.controller('shoppingController', ['$scope', 'ActionSheet', '$ionicActionSheet', 'Loading', '$timeout', 'Modal', function ($scope, ActionSheet, $ionicActionSheet, Loading, $timeout, Modal) {
		
		$scope.data = [
			{
				name: 'DP-01黑色固定包胶哑铃健身器材厂家批发',
				desc: '[时尚款] 黑色  45公斤圆头哑铃磨砂',
				img: './public/images/product/product-01.png',
				money: 688.00,
				sale: 1088.00,
				number: 5,
			},
			{
				name: 'DP-01黑色固定包胶哑铃健身器材厂家批发',
				desc: '[时尚款] 黑色  45公斤圆头哑铃磨砂',
				img: './public/images/product/product-02.png',
				money: 1088.00,
				sale: 688.00,
				number: 5,
			},
			{
				name: 'DP-01黑色固定包胶哑铃健身器材厂家批发',
				desc: '[时尚款] 黑色  45公斤圆头哑铃磨砂',
				img: './public/images/product/product-03.png',
				money: 1088.00,
				sale: 688.00,
				number: 5,
			},
			{
				name: 'DP-01黑色固定包胶哑铃健身器材厂家批发',
				desc: '[时尚款] 黑色  45公斤圆头哑铃磨砂',
				img: './public/images/product/product-04.png',
				money: 1088.00,
				sale: 688.00,
				number: 5,
			}
		]

		$scope.isDelete = false;
		$scope.isReorder = false;
		$scope.isSwipe = true;

		// 编辑
		$scope.toggleReorder = function () {
			$scope.isReorder = !$scope.isReorder;
		}

		//删除
		$scope.toggleDelete = function () {
			$scope.isDelete = !$scope.isDelete;
		}

		//商品删除
		$scope.moveItem = function (item, fromIndex, toIndex) {
			$scope.data.splice(fromIndex, 1);
    		$scope.data.splice(toIndex, 0, item);
		}

		//上拉菜单
		$scope.openSheet = function () {
			$scope.closingSheet = ActionSheet.showSheet({
				title: '选择地址',
				province: '广东',
				city: '广州市',
				area: '白云区',
				success: function (i) {
					console.log('点击了' + i + '地址');
					if (i == 0) {
						console.log('省');
					} else if (i == 1) {
						console.log('市');
					}else if (i == 2) {
						console.log('区');
					}
				},
			})
		}

		//加载框
		$scope.loading = function () {
			Loading.showLoading();

			$timeout(function () {
				Loading.hideLoading();
			}, 5000);

		}

		//下拉添加
		$scope.addItem = function () {
			//  数组对象下标
			var index = Math.floor(Math.random() * $scope.data.length);
			$scope.data.unshift($scope.data[index]);
			// console.log($scope.data);
			// console.log(index);
			$timeout(function () {
				 $scope.$broadcast('scroll.refreshComplete');
			}, 1000);
		}


		$scope.data.length = 3;
		if ($scope.data.length) {
			$scope.isNone = true
		}else {
			$scope.isEmpty = false
		}


		//
		$scope.modalUrl = './service/templateUrl/Modal.html'
		Modal.initModal($scope, $scope.modalUrl);

		$scope.showModal = function () {
			Modal.showModal($scope);
		}
		$scope.hideModal = function () {
			Modal.hideModal($scope);
		}

		//点击编辑
		$scope.isonEdit = false;  //  编辑
		$scope.isnoEdit = true;  //  不编辑
		$scope.onEdit = function () {
			$scope.isnoEdit = !$scope.isnoEdit;
			$scope.isonEdit = !$scope.isonEdit;
		}


	}])