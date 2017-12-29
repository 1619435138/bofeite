angular.module('app')
	.controller('indexController', ['$scope', function ($scope) {

    	
    	$scope.banner = {
    		doesContinue : true,
    		autoPlay: true,
    		slideInterval: 1000,
    		showPager: true
    	}

    // 列表项
    	$scope.label = [
    		{
    			imgUrl: './public/images/label/label-01.png'
    		},
    		{
    			imgUrl: './public/images/label/label-02.png'
    		},
    		{
    			imgUrl: './public/images/label/label-03.png'
    		},
    		{
    			imgUrl: './public/images/label/label-04.png'
    		},
    	] 

    // 货郎限时抢
    	$scope.timeLimit = [
    		{
    			imgUrl: './public/images/index/grab-goods-01.jpg',
    			newPrice: '200',
    			originalPrice: '400',
    		},
    		{
    			imgUrl: './public/images/index/grab-goods-02.jpg',
    			newPrice: '600',
    			originalPrice: '800',
    		},
    		{
    			imgUrl: './public/images/index/grab-goods-03.jpg',
    			newPrice: '1000',
    			originalPrice: '1200',
    		},
    		{
    			imgUrl: './public/images/index/grab-goods-04.jpg',
    			newPrice: '1400',
    			originalPrice: '1600',
    		},
    		{
    			imgUrl: './public/images/index/grab-goods-05.jpg',
    			newPrice: '300',
    			originalPrice: '600',
    		},
    		{
    			imgUrl: './public/images/index/grab-goods-06.jpg',
    			newPrice: '900',
    			originalPrice: '1200',
    		},
    		{
    			imgUrl: './public/images/index/grab-goods-07.jpg',
    			newPrice: '400',
    			originalPrice: '500',
    		},
    		{
    			imgUrl: './public/images/index/grab-goods-08.jpg',
    			newPrice: '600',
    			originalPrice: '700',
    		},
    	];

    //热卖专场
    	$scope.hotGoods = {
			hotGoodsLeft: {
				img: './public/images/index/hos-left.png',
			},
			
			hotGoodsright: [
				{
					url: 'app.goods',
					img: './public/images/index/hos-right-01.png',
				},
				{	
					url: 'app.goods',
					img: './public/images/index/hos-right-02.png',
				},
			]
		};

	// 商品推荐  特色推荐  新逛商场  爱生活
		$scope.goods = [
			{
				advert: './public/images/index/advert-01.jpg',
				product: [
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						},
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						},
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
					],
				name: '商品推荐'
			},
			{
				advert: './public/images/index/advert-02.jpg',
				product: [
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						},
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						},
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
					],
				name: '特色推荐'
			},
			{
				advert: './public/images/index/advert-03.jpg',
				product: [
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						},
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						},
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
					],
				name: '特色推荐'
			},
			{
				advert: './public/images/index/advert-04.jpg',
				product: [
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						},
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						},
						{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
						,{
							imgUrl: './public/images/index/goods-01.png',
			    			name: 'BFT1056 提肩训练器广州健身器材厂家批发',
			    			price: '999.00',
						}
					],
				name: '爱生活'
			},
			
		]
    	
		
	}])