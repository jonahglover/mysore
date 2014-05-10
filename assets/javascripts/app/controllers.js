app.controller('mainController', ['$scope', 'PALACE', function($scope, PALACE) {

    $scope.init = function(){
        $scope.comments = [];
        loadComments();
    }

    $scope.addComment = function(){
        
    }

    loadComments = function(){
        palace_data = {
                    "type"      :"receive",
                    "subdomain" :"demos",
                    "api"       :"mysore",
                    "where"     :{}
        };
        PALACE
        .receive(palace_data)
        .success(function(data){
             $scope.comments = data;
            console.log($scope.comments);
        })
    }

}]);

