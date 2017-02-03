var testApp = angular.module('testApp', []);

testApp.controller('HelloController', function($scope, $location) {
	$scope.greeting = { text: 'Hello'};
  $scope.group = "group"
	$scope.message = $location.absUrl();



});



testApp.controller('CartController', function($scope) {
	$scope.items= [
		{title: 'Paint pots', quantity: 8, price: 3.95},
		{title: 'Polka dots', quantity: 17, price: 3.95},
		{title: 'Pebbles', quantity: 4, price: 3.95}
	];

	$scope.remove=function(index) {
		//remove(indexuserinput)

		$scope.items.splice(index, 1);
	}
})
