angular
    .module("EmployeeApp")
    .controller("EmployeeCreateCtrl", function ($scope, EmployeeFactory) {
        $scope.newEmployee = {}

        EmployeeFactory.list().then(data => {
            $scope.employees = data
        })

$scope.addEmployee = function () {
    const employee = {
        "firstName": $scope.newEmployee.firstName,
        "lastName": $scope.newEmployee.lastName,
        "employmentStart": Date.now(),
        "employmentEnd": 0
    }

    /**
     * Use the factory to POST to Firebase
     */
    EmployeeFactory.add(employee).then(() => {
        $scope.newEmployee.firstName = ""
        $scope.newEmployee.lastName = ""
    })

        /**
         * If POST was successful, retrieve new list of employees
         */
        .then(() => {
            return EmployeeFactory.list()
        })

        /**
         * Bind new list of employees to scope so view gets updated
         */
        .then(employees => {
            $scope.employees = employees
        })
}
})