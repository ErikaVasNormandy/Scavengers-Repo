var appName = angular.module("AppForHTML", []);


appName.controller("backgroundController", function($scope){
  $scope.bgImages = [" https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/960.jpg", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/Over-the-Garden-Wall-S01E02-720p-HDTVSeriesdl.com_00_02_54_00000.png"];
  $scope.getImage==function(num){
    return bgImages[num];
  }
  $scope.bgImg= {
    "background-image": 'url('+ $scope.bgImages[0] +')'
  }
});

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
