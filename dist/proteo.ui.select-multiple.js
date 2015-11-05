/* Todo Module */
angular.module("proteo.ui.select-multiple", []).controller("selectMultipleCtrl",  function($scope, $http) {

		console.log("Controller select-multiple");

})
.directive("selectMultiple", function() {

	console.log("Directive select-multiple");
	return {
		restrict: "AE",
		controller : 'selectMultipletCtrl',
		templateUrl: './bower_components/proteo.ui.buscador-contacto/dist/proteo.ui.select-multiple.tpl.html'
	}
});
/* Todo Filter */