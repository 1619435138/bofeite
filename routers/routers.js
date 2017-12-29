angular.module('app')
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/index');
		$stateProvider
			.state('app', {  //  一级
				url: '',
				abstract: true,
				templateUrl: './template/app.html',
				controller: 'appController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('app')
					}]
				}
				
			})
			.state('app.start', {  //  首页
				url: '/start',
				templateUrl: './template/start/start.html',
				controller: 'startController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('start')
					}]
				}
			})
			.state('app.index', {  //  首页
				url: '/index',
				templateUrl: './template/index/index.html',
				controller: 'indexController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('index')
					}]
				}
			})
			.state('app.search', {  //  搜索
				url: '/search',
				params:{name:null},
				templateUrl: './template/search/search.html',
				controller: 'searchController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('search')
					}]
				}
			})
			.state('app.searchGoods', {  //  1.4搜索跑步机
				url: '/searchGoods',
				params:{name:null},
				templateUrl: './template/searchGoods/searchGoods.html',
				controller: 'searchGoodsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('searchGoods')
					}]
				}
			})
			.state('app.cityWide', {  //  同城图购
				url: '/cityWide',
				templateUrl: './template/cityWide/cityWide.html',
				controller: 'cityWideController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('cityWide')
					}]
				}
			})
			.state('app.goods', {  //  商品
				url: '/goods',
				templateUrl: './template/goods/goods.html',
				controller: 'goodsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('goods')
					}]
				}
			})
			.state('app.classify', {  //  分类
				url: '',
				abstract: true,
				templateUrl: './template/classify/classify.html',
				controller: 'classifyController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classify')
					}]
				}
			})
			.state('app.classify.news', {  //  分类 -> 推荐分类
				url: '/classify/news',
				templateUrl: './template/classify/news.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classify')
					}]
				}
			})
			.state('app.classify.power', {  //  分类 -> 力量型
				url: '/classify/power',
				templateUrl: './template/classify/power.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classify')
					}]
				}
			})
			.state('app.classify.run', {  //  分类 -> 跑步机
				url: '/classify/run',
				templateUrl: './template/classify/run.html',
			})
			.state('app.classify.bicycle', {  //  分类 -> 动感单车
				url: '/classify/bicycle',
				templateUrl: './template/classify/bicycle.html',
			})
			.state('app.classify.health', {  //  分类 -> 健身车
				url: '/classify/health',
				templateUrl: './template/classify/health.html',
			})
			.state('app.classify.free', {  //  分类 -> 自由型
				url: '/classify/free',
				templateUrl: './template/classify/free.html',
			})
			.state('app.classify.overall', {  //  分类 -> 综合型
				url: '/classify/overall',
				templateUrl: './template/classify/overall.html',
			})
			.state('app.shopping', {  //  购物车
				url: '/shopping',
				templateUrl: './template/shopping/shopping.html',
				controller: 'shoppingController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('shopping')
					}]
				}
			})
			.state('app.personal', {  //  个人中心
				url: '/personal',
				// url: '',
				// abstract: true,
				templateUrl: './template/personal/personal.html',
				controller: 'personalController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personal')
					}]
				}
			})
			.state('app.personalData', {  //  4.1个人信息
				url: '/personalData',
				templateUrl: './template/personalData/personalData.html',
				controller: 'personalDataController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personalData')
					}]
				}
			})
			.state('app.personalOpinion', {  //  4.1个人中心-意见反馈
				url: '/personalOpinion',
				templateUrl: './template/personalOpinion/personalOpinion.html',
				controller: 'personalOpinionController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personalOpinion')
					}]
				}
			})
			.state('app.personalAddress', {  //  4.2.1个人中心-添加新地址
				url: '/personalAddress',
				templateUrl: './template/personalAddress/personalAddress.html',
				controller: 'personalAddressController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personalAddress')
					}]
				}
			})
			.state('app.personalFeedback', {  //  4.2.2个人中心-意见反馈3
				url: '/personalFeedback',
				templateUrl: './template/personalFeedback/personalFeedback.html',
				controller: 'personalFeedbackController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personalFeedback')
					}]
				}
			})
			.state('app.order', {  //  5.1我的订单
				url: '/order',
				templateUrl: './template/order/order.html',
				controller: 'orderController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('order')
					}]
				}
			})
			.state('login', {  //  登录
				url: '/login',
				templateUrl: './template/login/login.html',
				controller: 'loginController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('login')
					}]
				}
			})
			.state('register', {  //  注册
				url: '/register',
				templateUrl: './template/register/register.html',
				controller: 'registerController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('register')
					}]
				}
			})
			.state('registerSuccess', {  //  注册成功
				url: '/registerSuccess',
				templateUrl: './template/registerSuccess/registerSuccess.html',
				controller: 'registerSuccessController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('registerSuccess')
					}]
				}
			})
			.state('editpwd', {  //  修改密码
				url: '/editpwd',
				templateUrl: './template/editpwd/editpwd.html',
				controller: 'editpwdController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('editpwd')
					}]
				}
			})
			.state('app.personalPlatform', {  //  信息平台
				url: '/personalPlatform',
				templateUrl: './template/personalPlatform/personalPlatform.html',
				controller: 'personalPlatformController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personalPlatform')
					}]
				}
			})
			.state('app.orderDetails', {  //  5.1.2订单详情
				url: '/orderDetails',
				templateUrl: './template/orderDetails/orderDetails.html',
				controller: 'orderDetailsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('orderDetails')
					}]
				}
			})
			.state('app.orderConfirm', {  //  8.1支付-确定订单
				url: '/orderConfirm',
				templateUrl: './template/orderConfirm/orderConfirm.html',
				controller: 'orderConfirmController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('orderConfirm')
					}]
				}
			})
			.state('app.payment', {  //  8.2支付-付款
				url: '/payment',
				templateUrl: './template/payment/payment.html',
				controller: 'paymentController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('payment')
					}]
				}
			})
			.state('app.paymentState', {  //  8.3支付-交易成功
				url: '/paymentState',
				templateUrl: './template/paymentState/paymentState.html',
				controller: 'paymentStateController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('paymentState')
					}]
				}
			})
			.state('app.personalOnLine', {  //  4.2.1个人中心-意见反馈2
				url: '/personalOnLine',
				templateUrl: './template/personalOnLine/personalOnLine.html',
				controller: 'personalOnLineController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personalOnLine')
					}]
				}
			})
			.state('app.personalDelivery', {  //  4.1个人中心-收货地址
				url: '/personalDelivery',
				templateUrl: './template/personalDelivery/personalDelivery.html',
				controller: 'personalDeliveryController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personalDelivery')
					}]
				}
			})
			.state('app.orderComment', {  //  5.5.1我的订单-发表评价
				url: '/orderComment',
				templateUrl: './template/orderComment/orderComment.html',
				controller: 'orderCommentController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('orderComment')
					}]
				}
			})

	}])