angular.module('app')
	.config(['$ionicConfigProvider',function($ionicConfigProvider) {

		//$ionicConfigProvider.tabs.position('bottom');// other values: top  ionic tabs 在下面
		$ionicConfigProvider.platform.ios.tabs.position('bottom');
		$ionicConfigProvider.platform.android.tabs.position('bottom');

	}])