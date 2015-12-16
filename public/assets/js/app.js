'use strict';
( function(){
  angular.module('quorumApp', ['config'])
    /// Service to call advisor list api
    .service('Services', ['HOST', '$http', function(HOST, $http){
      var Services = {};

      // HTTP Post to submit an advisor Request
      // Services.postRequest = function(request){
      //   return $http.post(HOST + '/api/v1/Request', request);
      // };

      return Services;
    }])

    .controller('requestController', ['Services', '$scope', '$timeout', function(Services, $scope, $timeout){
      $scope.errors = false;
      $scope.submitted = false;

      // Submit the request form request
      $scope.submitRequest = function(){
        console.log("Submot");
        var request = $scope.request;
        $scope.submitted = true;
        $scope.errors = false;
        // Services.postRequest(request).then(function(data){
        //   console.log(data);
        //   // Wait a sec to show
        //   $timeout(function(){ $scope.success = true; }, 1000);
        // }, function(err){
        //   $scope.errors = true;
        //   $scope.submitted = false;
        //   console.log(err);
        // });
      };
    }]);
})();
