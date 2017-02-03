var appName = angular.module("AppForHTML", []);
appName.controller("ctrl1", function($scope) {
  $scope.profile="VenetianGlass"
})

appName.controller("TabController", function($scope) {
  $scope.tab=1;

  $scope.setTab=function(newTab) {
    $scope.tab=newTab;
  }

  $scope.isSet=function(tabNum) {
    return $scope.tab == tabNum;
  };
})

