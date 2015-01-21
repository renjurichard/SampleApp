// Setting up a service to house our json file so that it can be called by the controllers
/*
ANZApp.factory('service', function($http,$q) {
    var jsondata = {
         dataStore : [],
        get: function() {
           /* if ( !promise ) {
                var promise =  $http.get('data.json').success(function(response) {
                    return response.data;
                });
                return promise;
            }
        }

                    var url = 'data.json';
                    return $http.get(url).success(function(data) {
                        dataStore = data;
                    }).error(function() {
                        dataStore = [];
                    });

}
            };
        return jsondata;
    });

*/
ANZApp.factory('formServices', ['$http', function($http,$q) {
            var jsondata = {
                dataStore : [],

                getFormData: function() {
                    var url = 'data.json';

                     return $http.get(url).success(function(data) {
                        dataStore = data;
                    }).error(function() {
                        dataStore = [];
                    });
                }
            };

            return jsondata;
        }]);

