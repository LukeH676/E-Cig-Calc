/* JavaScript Document */

(function () {


	var app = angular.module('myCalcu', []);

	app.controller('CalculatorController', ['$scope', function ($scope) {



		$scope.current_cPerDay = 25;
		$scope.provinceList = ["AB", "BC", "NB", "MB", "NL", "NS", "NWT", "NU", "ON", "PEI", "SK", "YK", "QC"];
		$scope.numOfTar = 0;
		$scope.nicStr = 0;

		$scope.current_cost = 12.15;
		$scope.total_days = 365;
		$scope.cost_year = 0.00;
		$scope.prov_name = "Ontario";


		$scope.calculate = function () {


			switch ($scope.nameTest) {

				case "YK":
					$scope.current_cost = 12.518;
					$scope.prov_name = "Yukon";
					break;
				case "BC":
					$scope.current_cost = 12.512;
					$scope.prov_name = "British Columbia";
					break;
				case "AB":
					$scope.current_cost = 12.636;
					$scope.prov_name = "Alberta";
					break;
				case "SK":
					$scope.current_cost = 14.867;
					$scope.prov_name = "Saskatchewan";
					break;
				case "MB":
					$scope.current_cost = 16.848;
					$scope.prov_name = "Manitoba";
					break;
				case "ON":
					$scope.current_cost = 12.14;
					$scope.prov_name = "Ontario";
					break;
				case "QC":
					$scope.current_cost = 11.015;
					$scope.prov_name = "Quebec";
					break;
				case "NL":
					$scope.current_cost = 14.907;
					$scope.prov_name = "Newfound Land";
					break;
				case "NB":
					$scope.current_cost = 15.311;
					$scope.prov_name = "New Brunswick";
					break;
				case "NS":
					$scope.current_cost = 16.06;
					$scope.prov_name = "Nova Scotia";
					break;
				case "PEI":
					$scope.current_cost = 14.618;
					$scope.prov_name = "Prince Edward Islands";
					break;
				case "NWT":
					$scope.current_cost = 15.486;
					$scope.prov_name = "North West Territories";
					break;
				case "NU":
					$scope.current_cost = 14.123;
					$scope.prov_name = "Nunavut";
					break;
			};
			$scope.perCigCost = ($scope.current_cost / 25).toFixed(2);
			$scope.cost_year = (($scope.current_cost / 25) * ($scope.current_cPerDay * $scope.total_days)).toFixed(1);
			$scope.numOfCigs = $scope.current_cPerDay * $scope.total_days;
			$scope.numOfTar = (($scope.numOfCigs * 11.342) / 1000).toFixed(2);
			$scope.numBottles = (356 / 6).toFixed(1);
			$scope.vapeCostYear = ($scope.numBottles * 18.64).toFixed(2);
			$scope.diff = ($scope.cost_year - $scope.vapeCostYear).toFixed(2);

			if ($scope.current_cPerDay >= 34) {
				$scope.nicStr = 24;
			} else if ($scope.current_cPerDay >= 23 && $scope.current_cPerDay <= 33) {
				$scope.nicStr = 18;
			} else if ($scope.current_cPerDay >= 13 && $scope.current_cPerDay < 23) {
				$scope.nicStr = 12;
			} else if ($scope.current_cPerDay >= 8 && $scope.current_cPerDay < 13) {
				$scope.nicStr = 6;
			} else if ($scope.current_cPerDay >= 1 && $scope.current_cPerDay < 8) {
				$scope.nicStr = 3;
			} else {
				$scope.nicStr = 0;
			}

		}

		$scope.calculate();
	}]);
})();

// buy coils ever 7 weeks