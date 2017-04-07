var appName = angular.module("AppForHTML", []);


appName.controller("backgroundController", function($scope, $timeout){
  $scope.bgImages = ["https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/jwHdoTn.png", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/efcb4c0e828c1809e38b9cdc02aea227.png", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/960.jpg", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/87cbb3248a40f91479e8ab7da60cb09e.jpg", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/Over-the-Garden-Wall-S01E02-720p-HDTVSeriesdl.com_00_02_54_00000.png", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/thumb-1920-735771.png", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SpringMoodBoard/dd2bfcfcc02cba84fef55e4c454f9c35.jpg", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SpringMoodBoard/Snapdragon-Color-Meaning.jpg", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/tumblr_mvt4dfUVx71smn4pqo9_1280.jpg",
  "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/maxresdefault.jpg", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/SummerMoodBoard/M2T6aUy.jpg", "https://s3-us-west-1.amazonaws.com/scavengers-repo.com/images/AutumnMoodBoard/2030_over_the_garden_wall.jpg"];
  $scope.message= "Hello"

  var rand = Math.floor(Math.random() * 12 ) + 0;



  // $timeout(function () { $scope.message= "world"; var rand = Math.floor(Math.random() * 12 ) + 0; }, 1000);
  //
  //
  //
  // $scope.bgImg= {
  //   "background-image": 'radial-gradient(rgba(0,0,0,.2), rgba(1,0,0, 1)), url('+ $scope.bgImages[rand] +')'
  // }


  var secs=4;

  function backgroundSequence(){
    console.log("k")
    window.clearTimeout();
    var k=0;
    for (i = 0; i < $scope.bgImages.length; i++) {
		setTimeout(function(){
			document.documentElement.style.background = 'radial-gradient(rgba(0,0,0,.2), rgba(1,0,0, 1)), url('+ $scope.bgImages[rand] +')'
			document.documentElement.style.backgroundSize ="cover";
		if ((k + 1) === $scope.bgImages.length) { setTimeout(function() { backgroundSequence() }, (secs * 1000))} else { k++; }
		}, (secs * 1000) * i)
	}

<<<<<<< HEAD
=======


  $scope.bgImg= {
    "background-image": 'radial-gradient(rgba(0,0,0,.2), rgba(1,0,0, 1)), url('+ $scope.bgImages[rand] +')'

>>>>>>> d57e5ff9202dc7ae66ea3ee543ad5ec151e82b5f
  }

backgroundSequence();

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

  $scope.homeContent="Some people might be programmers, others might be engineers. I like to build worlds, compact repositories with various assets that I find on the shoreline.";
  $scope.projects ="projects over here";
  $scope.worldBuilding="Arda Hyperion Sketchdump";
  $scope.breadCrumbs="One long list of articles, + cards?l";
  $scope.about ="About me";




});
