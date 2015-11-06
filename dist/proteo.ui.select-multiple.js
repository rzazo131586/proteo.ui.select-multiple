/* Todo Module */
angular.module("proteo.ui.select-multiple", []).controller("selectMultipleCtrl",  function($scope, $http) {

		console.log("Controller select-multiple");
		$http.get('http://localhost:3000/Country').success(function(data) {
            $scope.countries 		= data;
            console.log("Countries >> "+JSON.stringify($scope.countries.name));
        });
})
.directive("selectMultiple", function() {

	console.log("Directive select-multiple");
	
	return {
		restrict: "AE",
		controller : 'selectMultipleCtrl',
		templateUrl: './bower_components/proteo.ui.buscador-contacto/dist/proteo.ui.select-multiple.tpl.html'
	}
})
;
/* Todo Filter */