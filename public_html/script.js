/*
 var app = angular.module('app', ['ngDraggable']);
 app.controller('MainCtrl', function ($scope) {
 $scope.draggables = [];
 $scope.onDragComplete = function (data, evt) {
 console.log("drag success, data:", data);
 };
 $scope.onDropComplete = function (data, evt) {
 console.log("drop success, data:", data);
 };
 });
 **/


var app = angular.module('ExampleApp', ['ngDraggable']);
app.controller('MainCtrl', function ($scope) {
    $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function () {
        $scope.centerAnchor = !$scope.centerAnchor;
    };
    $scope.draggableObjects = [{name: 'one'}, {name: 'two'}, {name: 'three'}];

    $scope.resp;
    $scope.onDragSuccess1 = function (data, evt) {

    };
    $scope.onDropComplete1 = function (data, evt) {
        $scope.resp = data;
    };
    var inArray = function (array, obj) {
        var index = array.indexOf(obj);
    };
});
