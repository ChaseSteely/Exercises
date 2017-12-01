const app = angular.module("EmployeeMgmt", []);

app.controller("EmployeeCtrl", function ($scope) {
    $scope.newEmp = {}
    $scope.employees = [
        {
            "id": 1,
            "firstName": "Erin",
            "lastName": "Orstrom",
            "employmentStart": 1512140013765,
            "employmentEnd": null
        },
        {
            "id": 2,
            "firstName": "Wayne",
            "lastName": "Hutchinson",
            "employmentStart": 1512139999102,
            "employmentEnd": null
        },
        {
            "id": 3,
            "firstName": "Sarah",
            "lastName": "Story",
            "employmentStart": 1512139999729,
            "employmentEnd": null
        },
        {
            "id": 4,
            "firstName": "Sulaiman",
            "lastName": "Allan",
            "employmentStart": 1512140294571,
            "employmentEnd": null
        },
        {
            "id": 5,
            "firstName": "Ben",
            "lastName": "Marks",
            "employmentStart": 1512200192934,
            "employmentEnd": null
        }
    ]

    $scope.fireEmp = function (employee) {
        // Do you see the PFM here of full object comparison?
        employee.employmentEnd = Date.now()
        console.log(employee)
    };

    $scope.addEmp = function () {
        const newE =
            {
                "firstName": $scope.newEmp.firstName,
                "lastName": $scope.newEmp.lastName,
                "employmentStart": Date.now(),
                "employmentEnd": null
            }

        $scope.employees.push(newE);
        $scope.newEmp.firstName = ""
        $scope.newEmp.lastName = ""
    }
});