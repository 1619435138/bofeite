(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
			 	{
			 		name: 'app',
			 		files: [
			 			'./controller/appController.js',
			 			'./public/css/header.css',
			 			'./public/css/footer.css',
			 		]
			 	},
			 	{
			 		name: 'start',
			 		files: [
			 			'./template/start/startController.js',
			 			'./template/start/start.css',
			 		]
			 	},
			 	{
			 		name: 'index',
			 		files: [
			 			'./template/index/indexController.js',
			 			'./template/index/index.css',
			 		]
			 	},
			 	{
			 		name: 'classify',
			 		files: [
			 			'./template/classify/classifyController.js',
			 			'./template/classify/classify.css',
			 			'./template/classify/classify.js',
			 		]
			 	},
			 	{
			 		name: 'shopping',
			 		files: [
			 			'./template/shopping/shoppingController.js',
			 			'./template/shopping/shopping.css',
			 		]
			 	},
			 	{
			 		name: 'personal',
			 		files: [
			 			'./template/personal/personalController.js',
			 			'./template/personal/personal.css',
			 		]
			 	},
			 	{
			 		name: 'search',
			 		files: [
			 			'./template/search/searchController.js',
			 			'./template/search/search.css',
			 		]
			 	},
			 	{
			 		name: 'cityWide',
			 		files: [
			 			'./template/cityWide/cityWideController.js',
			 			'./template/cityWide/cityWide.css',
			 		]
			 	},
			 	{
			 		name: 'goods',
			 		files: [
			 			'./template/goods/goodsController.js',
			 			'./template/goods/goods.css',
			 		]
			 	},
			 	{
			 		name: 'personalData',
			 		files: [
			 			'./template/personalData/personalDataController.js',
			 			'./template/personalData/personalData.css',
			 		]
			 	},
			 	{
			 		name: 'personalOpinion',
			 		files: [
			 			'./template/personalOpinion/personalOpinionController.js',
			 			'./template/personalOpinion/personalOpinion.css',
			 		]
			 	},
			 	{
			 		name: 'personalAddress',
			 		files: [
			 			'./template/personalAddress/personalAddressController.js',
			 			'./template/personalAddress/personalAddress.css',
			 		]
			 	},
			 	{
			 		name: 'personalFeedback',
			 		files: [
			 			'./template/personalFeedback/personalFeedbackController.js',
			 			'./template/personalFeedback/personalFeedback.css',
			 		]
			 	},
			 	{
			 		name: 'order',
			 		files: [
			 			'./template/order/orderController.js',
			 			'./template/order/order.css',
			 		]
			 	},
			 	{
			 		name: 'login',
			 		files: [
			 			'./template/login/loginController.js',
			 			'./template/login/login.css',
			 		]
			 	},
			 	{
			 		name: 'register',
			 		files: [
			 			'./template/register/registerController.js',
			 			'./template/register/register.css',
			 		]
			 	},
			 	{
			 		name: 'registerSuccess',
			 		files: [
			 			'./template/registerSuccess/registerSuccessController.js',
			 			'./template/registerSuccess/registerSuccess.css',
			 		]
			 	},
			 	{
			 		name: 'editpwd',
			 		files: [
			 			'./template/editpwd/editpwdController.js',
			 			'./template/editpwd/editpwd.css',
			 		]
			 	},
			 	{
			 		name: 'personalPlatform',
			 		files: [
			 			'./template/personalPlatform/personalPlatformController.js',
			 			'./template/personalPlatform/personalPlatform.css',
			 		]
			 	},
			 	{
			 		name: 'orderDetails',
			 		files: [
			 			'./template/orderDetails/orderDetailsController.js',
			 			'./template/orderDetails/orderDetails.css',
			 		]
			 	},
			 	{
			 		name: 'orderConfirm',
			 		files: [
			 			'./template/orderConfirm/orderConfirmController.js',
			 			'./template/orderConfirm/orderConfirm.css',
			 		]
			 	},
			 	{
			 		name: 'payment',
			 		files: [
			 			'./template/payment/paymentController.js',
			 			'./template/payment/payment.css',
			 		]
			 	},
			 	{
			 		name: 'paymentState',
			 		files: [
			 			'./template/paymentState/paymentStateController.js',
			 			'./template/paymentState/paymentState.css',
			 		]
			 	},
			 	{
			 		name: 'personalOnLine',
			 		files: [
			 			'./template/personalOnLine/personalOnLineController.js',
			 			'./template/personalOnLine/personalOnLine.css',
			 		]
			 	},
			 	{
			 		name: 'searchGoods',
			 		files: [
			 			'./template/searchGoods/searchGoodsController.js',
			 			'./template/searchGoods/searchGoods.css',
			 		]
			 	},
			 	{
			 		name: 'personalDelivery',
			 		files: [
			 			'./template/personalDelivery/personalDeliveryController.js',
			 			'./template/personalDelivery/personalDelivery.css',
			 		]
			 	},
			 	{
			 		name: 'orderComment',
			 		files: [
			 			'./template/orderComment/orderCommentController.js',
			 			'./template/orderComment/orderComment.css',
			 		]
			 	}
			 	
	 		]
	 		
 		});
	}]);
	
})();