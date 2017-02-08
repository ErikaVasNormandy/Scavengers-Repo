var appName = angular.module("AppForHTML", []);


appName.controller("ctrl1", function($scope) {
  $scope.profile="In ctrl1"
})

appName.controller("TabController", function($scope) {
  $scope.tab=1;

  $scope.setTab=function(newTab) {
    $scope.tab=newTab;
  }

  $scope.isSet=function(tabNum) {
    return $scope.tab == tabNum;
  };



});
appName.controller("TabController2", function($scope) {

});


appName.controller("Content", function($scope) {
  $scope.homeContent="Hello, my name is ...., welcome to my repository!";
  $scope.projects ="projects over here";
  $scope.contact="contact info";



});
