function DayCtrl($scope) {
	$scope.day = 1;
	$scope.increment = function() {
		$scope.day = $scope.day + 1;
	}
}
function ResourceCtrl($scope) {
	$scope.units = 500;
	$scope.use = function() {
		$scope.units = $scope.units - 100;
	}
	$scope.$watch('units', function(newValue, oldValue) {
		if($scope.units == 0){
			$scope.units = 500;
		}		  
	});
}
function ShipCtrl($scope) {
	$scope.ships = 0;
	$scope.build = function() {
		$scope.ships = $scope.ships + 1;
	}