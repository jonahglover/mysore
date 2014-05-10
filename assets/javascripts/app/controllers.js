app.controller('mainController', ['$scope', 'PALACE', function($scope, PALACE) {

    $scope.init = function(){
        $scope.comments = [];
        loadComments();
        $scope.comment = "Say Something!";
    }

    $scope.submitComment = function(){
        $scope.isUploading = true;
        console.log($scope.comment);
        palace_data = {
            "type"      :"send",
            "subdomain" :"demos",
            "api"       :"mysore",
            "key"       :"mysore",
            "data"      :[{"name":"Test Name","email":"jdeglover@aol.com","comment":"Hey Dude! Cool Site!"}]
        };

        PALACE
        .send(palace_data)
        .success(function(data){
            $scope.isUploading = false;
        });
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

