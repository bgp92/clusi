'use strict';

(function () {
  // Authentication controller Spec
  describe('AuthenticationController', function () {
    // Initialize global variables
    var AuthenticationController,
      scope,
      $httpBackend,
      $stateParams,
      $state,
      $location;

    beforeEach(function () {
      jasmine.addMatchers({
        toEqualData: function (util, customEqualityTesters) {
          return {
            compare: function (actual, expected) {
              return {
                pass: angular.equals(actual, expected)
              };
            }
          };
        }
      });
    });

    // Load the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    // describe('Logged in user', function () {
    //   beforeEach(inject(function ($controller, $rootScope, _$location_, _Authentication_) {
    //     scope = $rootScope.$new();

    //     $location = _$location_;
    //     $location.path = jasmine.createSpy().and.returnValue(true);

    //     // Mock logged in user
    //     _Authentication_.user = {
    //       username: 'test',
    //       roles: ['user']
    //     };

    //     AuthenticationController = $controller('AuthenticationController as vm', {
    //       $scope: scope
    //     });
    //   }));

    //   it('should be redirected to home', function () {
    //     expect($location.path).toHaveBeenCalledWith('/');
    //   });
    // });
  });
}());
