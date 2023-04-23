var app = angular.module("myApp", []);
app.controller("Cart", function ($scope, $http, $window) {
  // Get Chi Nhánh
  $http.get("https://localhost:7229/api/ChiNhanh/GetAllChiNhanh").then(
    function (response) {
      // Xử lý dữ liệu trả về tại đây nếu cần
      $scope.store_branch = response.data;
      console.log($scope.store_branch);
    },
    function (error) {
      // Xử lý lỗi tại đây nếu cần
      console.log(error);
    }
  );
});
