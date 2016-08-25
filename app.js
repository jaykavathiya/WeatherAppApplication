var weatherApp = angular.module('weatherApp',['ngRoute','ngResource']);

weatherApp.directive('weatherReport',function(){
    return{
        restrict:'E',
        templateUrl:"Directive/weatherReport.html",
        replace:true,
        scope:{
            weatherDay:"=",
            convertToStandard:"&",
            convertToDate:"&",
            dateFormat:"@"
        }
    }
})
