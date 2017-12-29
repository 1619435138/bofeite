angular.module('app')
	.directive('classifyList', [function () {
		return {
			
			restrict: 'AE', // E 作为元素名使用  A 作为属性使用 C 作为类名使用 M 作为注释使用
        	template : 'directive.js',
        	//templateUrl: 'xxx.html', //值为string function 以id为xxx.html为 调用文件显示
	        //prioruty: 0, //指明指令的优先级，若在dom上有多个指令优先级高的先执行
	        replace: false, //是否替换指令元素。一般这样调用元素<dialog></dialog>,当为true的时候，页面就不会出现dialog元素。
	        transclude:true, //terminal: true, //值为true时优先级低于此指令的其它指令无效
	        /*controller:function($scope, $element, $attrs, $transclude) {
                console.log("controller");
            },*/
	        link:function (scope, iElement, iAttrs, /*controller*/) {
	        	// 值为函数 用来定义指令行为从传入的参数中获取元素并进行处理
				console.log(scope);
				console.log(iElement);
				console.log(iAttrs);
				//console.log(controller);
	        }
    	};
	}])
	.directive('goodsBanner', ['$ionicSlideBoxDelegate', function ($ionicSlideBoxDelegate) {

		return {

			restrict: 'AE',
			//template: '',
			templateUrl: './directive/template/goodsBanner.html',
			replace: false,
			transclude: true,
			controller:function($scope, $element, $attrs, $transclude) {
                $scope.nextSlide = function() {
					$ionicSlideBoxDelegate.next();
				}
            },
            link:function (scope, iElement, iAttrs, /*controller*/) {

	        }

		}

	}])
	.directive('detailsStyle', [function () {
		return {
			restrict: 'AE',
        	templateUrl: './directive/template/details.html',
	        replace: false,
	        transclude:true,
    	};
	}])
	.directive('appHeader', [function () {
		return {
			restrict: 'AE',
        	templateUrl: './directive/template/appHeader.html',
	        replace: false,
	        transclude:true,
	        controller:function($scope, $element, $attrs, $transclude) {
                $scope.qq = 'qwe';
            },
            link:function (scope, iElement, iAttrs, /*controller*/) {
	        	// 值为函数 用来定义指令行为从传入的参数中获取元素并进行处理
				console.log(scope);
				console.log(iElement);
				console.log(iAttrs);
				//console.log(controller);
	        }
    	};
	}])
	.directive('appFooter', [function () {
		return {
			restrict: 'AE',
        	templateUrl: './directive/template/appFooter.html',
	        replace: false,
	        transclude:true,
	        controller:function($scope, $element, $attrs, $transclude) {
                $scope.qq = 'qwe';
            },
            link:function (scope, iElement, iAttrs, /*controller*/) {
	        	// 值为函数 用来定义指令行为从传入的参数中获取元素并进行处理
				console.log(scope);
				console.log(iElement);
				console.log(iAttrs);
				//console.log(controller);
	        }
    	};
	}])