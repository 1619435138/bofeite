angular.module('app')
	.factory('ActionSheet', ['$ionicActionSheet', function ($ionicActionSheet) {
		
		//上拉菜单(ActionSheet)通过向上弹出的框，来让用户选择选项
		return {
			showSheet: function (o) {
				var closeSheet = $ionicActionSheet.show({
					titleText: o.title,
					buttons: [
						{text: o.province},
						{text: o.city},
						{text: o.area},
					],
					buttonClicked: function (i) {
						o.success && typeof o.success === 'function' && o.success(i);
						closeSheet();
					}
				});
				return closeSheet;
			},

			hideSheet: function (fn) {
				fn && typeof fn === 'function' && fn();
			}
		};

	}])
	.factory('Loading', ['$ionicLoading', '$timeout', function ($ionicLoading, $timeout) {

		//$ionicLoading 是 ionic 默认的一个加载交互效果。里面的内容也是可以在模板里面修改。

		return {
			//  显示加载框
			showLoading: function (o) {
				$ionicLoading.show({
					template: '<div>\
						<ion-spinner class="spinner-color spinner-balanced" icon="spiral">\
						</ion-spinner>\
						<span style="position: relative; top: -7px;">加载中...</span>\
						</div>',
					noBackdrop: true,
					delay: 500,
					//duration: 2000,
				})
			},
			//  隐藏加载框
			hideLoading: function () {
				$ionicLoading.hide();
			}
		}

	}])
	.factory('Loading', ['$ionicLoading', function ($ionicLoading) {
		
		//$ionicLoading 是 ionic 默认的一个加载交互效果。里面的内容也是可以在模板里面修改。

		return {
			showLoading: function (o) {
				$ionicLoading.show({
					templateUrl: o.url,
				});
			},
			hideLoading: function () {
				$ionicLoading.hide();
			}
		}


	}])
	.factory('PopupConfirm', ['$ionicPopup', function ($ionicPopup) {

		//$ionicPopup 对话框通常用于提醒、警告等，在用户响应之前其他交互行为不能进行。与(ionic-china中文网文档)ionicModal模版对话框覆盖整个屏幕不同，对话框仅占一部分屏幕空间。

		return {
			Confirm: function (o,fn) {
				$ionicPopup.confirm({
					title: o.title,
					templateUrl: o.url,
					cancelText: o.cancelText,
					cancelType: o.cancelType,
					okText: o.okText,
					okType: o.okType,
				}).then(function (res) {
					if (res) {
						fn();
					}
					
				})
			}
		}

	}])
	.factory('Modal', ['$ionicModal', function ($ionicModal) {

		//创建一个模型示例

		return {
			initModal: function (scope,url) {
				$ionicModal.fromTemplateUrl(url, {
					scope: scope,
					animation: 'slide-in-up'
				}).then(function (modal) {
					scope.modal = modal;
				})
			},

			showModal: function (scope) {
				scope.modal.show();
			},

			hideModal: function (scope) {
				scope.modal.hide();
			}
		}

	}])
	.factory('slideBoxs', ['$ionicSlideBoxDelegate', function ($ionicSlideBoxDelegate) {

		return {
			onSlides: function () {
					
	    			
				
			}
		}

	}])