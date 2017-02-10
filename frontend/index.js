var appName = angular.module("AppForHTML", []);


// appName.controller("backgroundController", function($scope){
//   $scope.bgImg= {
//     "background-color": "coral"
//   }
// });

appName.controller("ctrl1", function($scope) {
  $scope.profile="A namespace for wandering minds"



})

appName.controller("TabController", function($scope) {
  $scope.tab=1;

  $scope.setTab=function(newTab) {
    $scope.tab=newTab;
  }

  $scope.isSet=function(tabNum) {
    return $scope.tab == tabNum;
  };

  $scope.homeContent="Hello, my name is Erika. I am a web+mobile develoepr with an interest in cybersecurity. I built this website in order to try out Amazon's AWS EC2 tool";
  $scope.projects ="projects over here";
  $scope.contact="contact info";


});
