define(["ionic"],function(){angular.module("posterApp.directives",["TextInput"]).directive("mydirective",["$window","$timeout","$compile",function($window,$timeout,$compile){return{restrict:"E",scope:{siteModel:"=",isActived:"=",templateExtConfig:"=",activityOtherConfig:"="},templateUrl:"modules/poster/test.html",link:function(scope,iElement,iAttr){var renderTemplate=function(){var templateDirective="<textinput></textinput>",newScope=scope.$new(),el=$compile(templateDirective)(newScope);iElement.append(el)};renderTemplate()}}}])});