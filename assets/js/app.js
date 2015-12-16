'use strict';
( function(){
  angular.module('quorumApp', [])
    /// Service to call advisor list api
    .service('Services', ['$http', function($http){
      var Services = {};
      var location = window.location;
      var host = '//' + location.host;

      // HTTP Post to submit an advisor Request
      Services.postRequest = function(request){
        return $http.post(host + '/api/v1/Contact/quorum', request);
      };

      return Services;
    }])

    .controller('requestController', ['Services', '$scope', '$timeout', '$location', function(Services, $scope, $timeout, $location){
      $scope.request = {};
      $scope.msgStatus = {
        errors: false,
        submitted: false,
        success: false
      };

      // Submit the request form request
      $scope.submitRequest = function(isValid){
        var request = $scope.request;
        $scope.showSpinner = true;
        $scope.msgStatus.submitted = true;
        $scope.msgStatus.errors = false;
        $scope.msgStatus.success = false;

        if (!isValid) {
          $scope.showSpinner = false;
          $scope.msgStatus.errors = true;
          $scope.msgStatus.message = "Please correct the errors above and try again.";
          return;
        }

        console.log("Valid");

        Services.postRequest(request).then(function(data){
          console.log(data);
          // Wait a sec to show
          $timeout(function(){
            $scope.msgStatus.success = true;
            $scope.showSpinner = false;
          }, 500);
        }, function(err){
          $scope.showSpinner = false;
          $scope.msgStatus.errors = true;
          $scope.msgStatus.message = "Server Error" + err;
          console.log(err);
        });
      };
    }]);
})();
