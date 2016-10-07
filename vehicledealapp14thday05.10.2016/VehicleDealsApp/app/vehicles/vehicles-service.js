(function () {
    angular.module("vehicles")
        .service("vehicleSvc", ["$http", "$q",
                           function ($http, $q) {

                var vehicleResponse;

                function addDiscount(data) {
                    _.each(data.data.vehicles, function (item) {
                        item.discount = .1;
                    });
                    return data;
                }

                this.getVehicles = function () {

                    var dfd = $q.defer();

                    if (vehicleResponse) {
                        dfd.resolve(vehicleResponse);
                    } else {
                        $http.get("app/api/vehicles.json")
                            .then(function (response) {
                                var data = addDiscount(response);
                                vehicleResponse = data;
                                dfd.resolve(vehicleResponse);
                            })
                            .catch(function (response) {
                                dfd.reject(response)
                            });
                    }
                    return dfd.promise;
                    // return  $http.get("app/api/vehicles.json");

                };
    }]);
})();
