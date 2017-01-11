"use strict";
/**
 * author :小潘
 * time: 2015年9月14日 14:52:15
 * description:
 */


define(["ionic"], function () {
    angular.module("posterApp.directives", [])
        .directive("mydirective", [
            "$window", "$timeout", "$compile", function ($window, $timeout, $compile) {
                return {
                    restrict: "E",
                    scope: {
                        siteModel: "=",
                        isActived: "=",
                        templateExtConfig: "=",
                        activityOtherConfig: "="
                    },
                    templateUrl: "modules/poster/test.1.html",
                    link: function (scope, iElement, iAttr) {
                        var renderTemplate = function () {
                            var templateDirective = "<textinput></textinput>"
                            var newScope = scope.$new();
                            // var el = $compile(templateDirective)(newScope);
                            //  iElement.append(el);
                             $compile.loadBeforeCompile("textinput",(function( $compile,templateDirective,newScope,iElement){
                                  return function(){
                                    var el = $compile(templateDirective)(newScope);
                                    iElement.append(el);
                                  }                                  
                             })($compile,templateDirective,newScope,iElement));
                        };
                        //渲染模板指令
                        renderTemplate();
                    }

                };
            }
        ]
        );
});