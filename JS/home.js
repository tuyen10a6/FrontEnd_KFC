var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
  $http.get("https://localhost:7229/api/Slide/GetAllSlide").then(
    function (response) {
      // Xử lý dữ liệu trả về tại đây nếu cần
      $scope.slides = response.data;
      console.log($scope.slides);
    },
    function (error) {
      // Xử lý lỗi tại đây nếu cần
      console.log(error);
    }
  );
  $http.get("https://localhost:7229/api/DanhMuc/GetAllDanhMuc").then(
    function (response) {
      // Xử lý dữ liệu trả về tại đây nếu cần
      $scope.category = response.data;
      console.log($scope.category);
    },
    function (error) {
      // Xử lý lỗi tại đây nếu cần
      console.log(error);
    }
  );
  $http.get("https://localhost:7229/api/SanPham/BestOrder").then(
    function (response) {
      // Xử lý dữ liệu trả về tại đây nếu cần
      $scope.BestOrder = response.data;
      console.log($scope.BestOrder);
    },
    function (error) {
      // Xử lý lỗi tại đây nếu cần
      console.log(error);
    }
  );
  $http.get("https://localhost:7229/api/SanPham/ProductTimeNew").then(
    function (response) {
      // Xử lý dữ liệu trả về tại đây nếu cần
      $scope.ProductTimeNew = response.data;
      console.log($scope.ProductTimeNew);
    },
    function (error) {
      // Xử lý lỗi tại đây nếu cần
      console.log(error);
    }
  );
});
