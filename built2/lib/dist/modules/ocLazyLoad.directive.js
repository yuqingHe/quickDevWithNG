(function(angular){"use strict";angular.module("oc.lazyLoad").directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse","$timeout",function($ocLazyLoad,$compile,$animate,$parse,$timeout){return{restrict:"A",terminal:!0,priority:1e3,compile:function compile(element,attrs){var content=element[0].innerHTML;return element.html(""),function($scope,$element,$attr){var model=$parse($attr.ocLazyLoad);$scope.$watch(function(){return model($scope)||$attr.ocLazyLoad},function(moduleName){angular.isDefined(moduleName)&&$ocLazyLoad.load(moduleName).then(function(){$animate.enter(content,$element),$compile($element.contents())($scope)})},!0)}}}}])})(angular);