(function () {
    angular.module('nextModule', [])
    .config([function () {
        console.log("Next Module:: config");
    }])
    .run([function () {
        console.log("Next Module::running");
    }])
        //remember to inject '$scope as a dependency of next controller before the function
    .controller('NextController', ['$scope', function ($scope) {
        console.log("NextController created");
        $scope.title = "Next Module Title";
        $scope.simpleBindedName = "SimpleBindedName";
        $scope.ngBindedName = "NgBindedName";
        $scope.clickCount = 0;
        
        $scope.increaseClickCountBy=function(val)
        {
            var next = $scope.clickCount+val;
            console.log("increaseClickCountBy was clicked");
            $scope.clickCount = next;
        }
        $scope.nextClickCount= function () {
            var next = $scope.clickCount + 1;
            console.log("nextClickCount was clicked");
            $scope.clickCount = next;
        }
        
    }])
})();