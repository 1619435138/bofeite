angular.module('app')
	.controller('classifyController', ['$scope', '$state', function ($scope, $state) {

	

    //  左边分类
    	$scope.classifyLeft = [
    		{
    			name: '推荐分类',
    			url: 'app.classify.news',
    		},
    		{
    			name: '力量型',
    			url: 'app.classify.power',
    		},
    		{
    			name: '跑步机',
    			url: 'app.classify.run',
    		},
    		{
    			name: '动感单车',
    			url: 'app.classify.bicycle',
    		},
    		{
    			name: '健身车',
    			url: 'app.classify.health',
    		},
    		{
    			name: '自由型',
    			url: 'app.classify.free',
    		},
    		{
    			name: '综合型',
    			url: 'app.classify.overall',
    		},
    	];

    //  右边商品
    	$scope.toggleClass = function (leftName) {
    		$state.go(leftName)
    	}
		
	}])