var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http) {
  $http.get("https://localhost:7229/api/Slide/GetAllSlide").then(
    function (response) {
      // Xử lý dữ liệu trả về tại đây nếu cần
      $scope.slides = response.data;
      console.log(response.data);
    },
    function (error) {
      // Xử lý lỗi tại đây nếu cần
      console.log(error);
    }
  );
});
