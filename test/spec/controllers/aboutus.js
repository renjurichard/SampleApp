    beforeEach(module('ANZApp'));


describe('People List Controller', function() {
    var scope;
    var formService;
    var controller;
   var q;
    var deferred;


  



    // inject the required services and instantiate the controller
    beforeEach(inject(function($rootScope, $controller,formServices) {
        scope = $rootScope.$new();
        //q = $q;
        controller = $controller('formCtrl', {
            $scope: scope,
            $service: formService
        });
    }));

      // define the mock people service
    beforeEach(inject(function($q) {
        formService = {
            dataStore : [{
                "type":"form",
               "title":"Registration Form",
               "action":"submit.aspx",
               "name":"registrationform"}],

            getFormData: function() {
                deferred = $q.defer();
                return deferred.promise;
            }
        };
    }));

    it('should call requestFormData on the people service when init is called',

    function() {
        spyOn(formService, 'getFormData');
        scope.init();
        
        deferred.resolve();
        scope.$root.$digest();
        expect(formService.getFormData).toHaveBeenCalled();
    });

    it('should populate the peopleList when init is called',

    function() {
        
        scope.init();
        deferred.resolve();
        scope.$root.$digest();
        expect(scope.appData).not.toBe([]);
    });
});