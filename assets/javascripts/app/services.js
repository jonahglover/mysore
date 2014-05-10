app.service('PALACE', ['$http', function($http) {
  base_url = ".palace.io/";
    this.receive = function(palace_data){
      // prepare url
      base_url = ".palace.io/";
      data_url = "http://" + palace_data["subdomain"] + base_url + palace_data["api"];

      return $http({
        method: "POST",
        url: data_url,
        data: palace_data,
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
      });
    },
    this.send = function(palace_data){
      // prepare url
      base_url = ".palace.io/";
      data_url = "http://" + palace_data["subdomain"] + base_url + palace_data["api"]

      console.log(palace_data);

      return $http({
        method: "POST",
        url: data_url,
        data: palace_data,
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
      });
    },
    this.change = function(palace_data){
      // prepare url
      base_url = ".palace.io/";
      data_url = "http://" + palace_data["subdomain"] + base_url + palace_data["api"]

      console.log(palace_data);

      return $http({
        method: "POST",
        url: data_url,
        data: palace_data,
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
      });
    },
    this.delete = function(palace_data){
      // prepare url
      base_url = ".palace.io/";
      data_url = "http://" + palace_data["subdomain"] + base_url + palace_data["api"]
      
      return $http({
        method: "POST",
        url: data_url,
        data: palace_data,
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
      });
    }
<<<<<<< HEAD
}]);
=======
}]);
>>>>>>> 4c3fa85201aabc6612d82853b63de51a985a8415
