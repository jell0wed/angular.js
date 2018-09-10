// Code goes here

var app = angular.module('plunker', []);

app.factory('$trackPromiseHandler', ['$window', function($window) {
    $window.promises = $window.promises || {};
    $window.promises.angular = $window.promises.angular || { pendingCount: 0 };

    return function(promise) {
        $window.promises.angular.pendingCount++;
    };
}]);

app.factory('$untrackPromiseHandler', ['$window', function($window) {
    return function(promise) {
        $window.promises.angular.pendingCount--;
    };
}]);

app.controller('MainCtrl', function($rootScope, $q) {
  $rootScope.timeAmount = 1000;
  $rootScope.pendingPromises = [];
  $rootScope.nextId = 0;
  $rootScope.willResolve = true;
  $rootScope.promisesCounter = 0;
  
  $rootScope.$watch(function(scope) {
    return window.promises.angular.pendingCount;
  }, function(newVal) {
    $rootScope.promisesCounter = window.promises.angular.pendingCount; 
  });
  
  $rootScope.addResolvPromise = function() {
    var promiseId = $rootScope.nextId;
    $q(function(resolve, reject) {
      if($rootScope.willResolve) {
        setTimeout(() => {
          resolve(promiseId);
        }, $rootScope.timeAmount);
      }
    }).then(function(id) {
      $rootScope.pendingPromises = $rootScope.pendingPromises.filter(x => x[0] !== id);
    }).finally(function(id) {
      console.log("finally() called");
    });
    
    $rootScope.pendingPromises.push([promiseId, $rootScope.willResolve]);
    $rootScope.timeAmount += 500;
    $rootScope.nextId++;
    $rootScope.willResolve = !$rootScope.willResolve;
  };
  
  $rootScope.addRejectPromise = function() {
    var promiseId = $rootScope.nextId;
    $q(function(resolve, reject) {
      if($rootScope.willResolve) {
        setTimeout(() => {
          reject(promiseId);
        }, $rootScope.timeAmount);
      }
    }).then(function(id) {}, function(id) {
      console.log("rejected");
      $rootScope.pendingPromises = $rootScope.pendingPromises.filter(x => x[0] !== id);
    }).catch(function(id) {
      console.log("catch");
    });
    
    $rootScope.pendingPromises.push([promiseId, $rootScope.willResolve]);
    $rootScope.timeAmount += 500;
    $rootScope.nextId++;
    $rootScope.willResolve = !$rootScope.willResolve;
  };
});