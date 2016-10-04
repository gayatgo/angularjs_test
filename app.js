(function(){
'use strict';


angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope){
	$scope.dishesStr = "";
	//$scope.dishes = [];
	$scope.msg ="";
	$scope.textcolor="";
	$scope.bordercolor ="";


	$scope.check = function(){

		var dishes = $scope.dishesStr.split(',');

		if(dishes.length == 0 || (dishes.length == 1 && dishes[0] == "")){
			$scope.msg ="Please enter data first.";	
			$scope.bordercolor = "red";
			$scope.textcolor = "red";			
		}
		else if(dishes.length <= 3){
			$scope.msg ="Enjoy!";	
			$scope.bordercolor = "green";
			$scope.textcolor = "green";
		}
		else{
			$scope.msg ="Too much!";
			$scope.bordercolor = "green";
			$scope.textcolor = "green";
		}
	};
}

})();
