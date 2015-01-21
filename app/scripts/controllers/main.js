





ANZApp.controller('introCtrl', function ($scope) {
   $scope.isShow = true;
        setTimeout(function(){
            //If page content was loaded, set the false to $scope.isShow.
            $scope.isShow = false;
            $scope.$apply();
        },'2000');
});



ANZApp.controller('formCtrl', function ($scope,formServices) {
	$scope.appData=[];
	$scope.init = function() {
	    formServices.getFormData().then(function(d) {
            $scope.appData = d.data;
        });
	}

	// $scope.init();
});

ANZApp.controller('formDataController', function (formServices , $scope) {
    /*formServices.get().then(function(d) {
        $scope.formData = d.data.modules[2];
    })*/

    $scope.appData=[];
	$scope.init = function() {
	    formServices.getFormData().then(function(d) {
            $scope.formData = d.data.modules[2];
        });
	}
	 //$scope.init();
});


ANZApp.controller('contentController', function (formServices , $scope) {
    /*formServices.get().then(function(d) {
        $scope.contentData = d.data.modules[1];
    })*/


		$scope.appData=[];
	$scope.init = function() {
	    formServices.getFormData().then(function(d) {
            $scope.contentData = d.data.modules[1];
        });
	}
	// $scope.init();

});



ANZApp.controller('rulesController', function (formServices , $scope) {
  /*  formServices.get().then(function(d) {
        $scope.rulesData = d.data.modules[2].rules;
    })*/

    $scope.appData=[];
	$scope.init = function() {
	    formServices.getFormData().then(function(d) {
            $scope.rulesData = d.data.modules[2].rules;
        });
	}

	 $scope.init();


});

ANZApp.controller('messagesController', function (formServices , $scope) {
    /*formServices.get().then(function(d) {
        $scope.messageData = d.data.modules[2].messages;
    })*/


    $scope.appData=[];
	$scope.init = function() {
	    formServices.getFormData().then(function(d) {
            $scope.messageData = d.data.modules[2].messages;
        });
	}
	// $scope.init();

});


ANZApp.controller("formSubmit", function ($scope,formServices) {
   // function to submit the form after all validation has occurred        
    $scope.ANZFormHandler = function () {

        // Set the 'submitted' flag to true
        $scope.submitted = true;

        if ($scope.userForm.$valid) {
            alert("Form is valid!");
        }
        else {
            alert("Please correct errors!");
        }
    };
});



