app.controller('mainController', ['$scope', 'PALACE', function($scope, PALACE) {

    $scope.init = function(){
        $scope.comments = [];
        loadComments();
        $scope.comment = "Say Something!";
        $scope.displayFields = false;
        startUpdate();
    }

    $scope.submitComment = function(){
        $scope.isUploading = true;
        stamp = new Date().getTime();
        palace_data = {
            "type"      :"send",
            "subdomain" :"demos",
            "api"       :"mysore",
            "key"       :"mysore",
            "data"      :[{"name":"Test Name","email":"jdeglover@aol.com","comment": $scope.comment,"timestamp":stamp}]
        };

        PALACE
        .send(palace_data)
        .success(function(data){
            $scope.isUploading = false;
            loadComments();
        });
    }

    $scope.displayContactFields = function(){
        $scope.displayFields = true;
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
            sortByKeyDesc(data,"timestamp");
            $scope.comments = data;
        })
    }

    sortByKeyDesc = function(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        });
    }

    /***
    Comment Update
    ***/
    frequency = 5000;
    interval = 0;

    startUpdate = function(){
        commentInterval = setInterval( "loadComments()", frequency ); 
    }


}]);

