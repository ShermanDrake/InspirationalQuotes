

angular.module('quoteApp', []);
angular.module('quoteApp');
angular.module('quoteApp').controller('mainController', ['$scope', function($scope){



$scope.typeQuote = '';
$scope.typeAuthor = '';










$scope.quotesArray = []
$scope.submitQuote =function(){
	$scope.quotesArray.push({text : $scope.typeQuote, author : $scope.typeAuthor})

		console.log($scope.quotesArray)

}








$scope.submitshow = true;
$scope.clicked = false;
$scope.textboxVisible = false;
$scope.textentryvisible = false;
$scope.clickcounter = 0
$scope.textcontent = '';
$scope.textarea = true;


$scope.imageclick = function(event){
		$scope.clickcounter++
		if ($scope.clickcounter === 1){
		$scope.clicked = true;
		$scope.textboxVisible = true;
      	$scope.x = event.offsetX; 
        $scope.y = event.offsetY;
        $scope.textX = (event.offsetX + 100);}

        
        }

$scope.submit = function(event){
	$scope.textboxVisible = true;
	$scope.submitshow = false;
	$scope.textentryvisible = true;
	$scope.textarea = false;

}        

$scope.cancel = function(event){
	$scope.clickcounter = -1;
	$scope.clicked = false;
	$scope.textboxVisible = false;
	$scope.textcontent = '';
	$scope.textentryvisible = false;
	$scope.textarea = true;


}

$scope.pointerClick = function(event) {
		$scope.clicked = false;

        }
$scope.textbox = function(event) {
		$scope.textboxVisible = false;
		$scope.textentryvisible = true;


}        

}])
// $scope.setactiveindex = function($index){
// 		$scope.activeindex = $index;
// 	}
// 	$scope.isactiveindex = function($index){
// 		return ($scope.activeindex === $index);
// 	}
// 	$scope.setactiveindex2 = function($index){
// 		$scope.activeindex2 = $index;
// 	}
// 	$scope.isactiveindex2 = function($index){
// 		return ($scope.activeindex2 === $index);
// 	}
// 	$scope.setactiveindex3 = function($index){
// 		$scope.activeindex2 = -2;
// 		$scope.activeindex = -2;
// 	}



// var x = event.clientX;     // Get the horizontal coordinate
// var y = event.clientY;     // Get the vertical coordinate

// <!--  -->