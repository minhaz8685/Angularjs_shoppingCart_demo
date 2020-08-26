(function(){

	var app = angular.module('store', []);

	app.controller('StoreController', ['$scope', function($scope){
	
		$scope.products = productsData;
		$scope.cart = [];
	  $scope.total = 0;
		
		$scope.addItemToCart = function(product){
		  
		 	if ($scope.cart.length === 0){
		 		product.count = 1;
		 		$scope.cart.push(product);
		 	} else {
		 		var repeat = false;
		 		for(var i = 0; i< $scope.cart.length; i++){
		 			if($scope.cart[i].id === product.id){
		 				repeat = true;
		 				$scope.cart[i].count +=1;
		 			}
		 		}
		 		if (!repeat) {
		 			product.count = 1;
		 		 	$scope.cart.push(product);	
		 		}
		 	}
		  $scope.total += parseFloat(product.price);
		 };

		 $scope.removeItemCart = function(product){
		   
		   if(product.count > 1){
		     product.count -= 1;
		   
		   }
		   else if(product.count === 1){
		     var index = $scope.cart.indexOf(product);
 			 $scope.cart.splice(index, 1);
		   }
		   
		   $scope.total -= parseFloat(product.price);
		 };

	}]);

	var productsData = [{
		id: 1,
		productsku: 'APL',
		name: 'Apple',
		price: 10.0,
		image: ''
	},{
		id: 2,
		productsku: 'AVC',
		name: 'Avocado',
		price: 14.5,
		image: ''
	},{
		id: 3,
		productsku: 'BAN',
		name: 'Banana',
		price: 11.43,
		image: ''
	},{
		id: 4,
		productsku: 'CTP',
		name: 'Cantaloupe',
		price: 15.9,
		image: ''
	}];

})();