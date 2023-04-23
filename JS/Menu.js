var app = angular.module("myApp", []);
app.controller("Cate", function ($scope, $http, $window) {
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
  // Lấy giá trị của tham số id từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  console.log(id);
  $http.get("https://localhost:7229/api/SanPham/ProductByCategory/" + id).then(
    function (response) {
      // Xử lý dữ liệu trả về tại đây nếu cần
      $scope.productcate = response.data;
      console.log($scope.productcate);
    },
    function (error) {
      // Xử lý lỗi tại đây nếu cần
      console.log(error);
    }
  );
  $scope.SearchProductName = ""; // Khởi tạo giá trị ban đầu cho biến productName

  $scope.searchProduct = function () {
    var apiUrl;
    if ($scope.SearchProductName === "") {
      apiUrl = "https://localhost:7229/api/SanPham/ProductByCategory/" + id; // Lấy toàn bộ danh sách sản phẩm
    } else {
      apiUrl =
        "https://localhost:7229/api/SanPham/SearchSanPham/" +
        $scope.SearchProductName; // Cập nhật đường dẫn của API
    }
    $http.get(apiUrl).then(function (response) {
      $scope.productcate = response.data; // Lưu danh sách sản phẩm vào biến products
    });
  };
  // Tang dan
  $scope.searchProductPriceAsc = function () {
    $http
      .get("https://localhost:7229/api/SanPham/SortPriceSanPhamAsc/" + id)
      .then(
        function (response) {
          // Xử lý dữ liệu trả về tại đây nếu cần
          $scope.productcate = response.data;
          console.log($scope.productcate);
        },
        function (error) {
          // Xử lý lỗi tại đây nếu cần
          console.log(error);
        }
      );
  };
  $scope.searchProductPriceDesc = function () {
    $http
      .get("https://localhost:7229/api/SanPham/SortPriceSanPhamDesc/" + id)
      .then(
        function (response) {
          // Xử lý dữ liệu trả về tại đây nếu cần
          $scope.productcate = response.data;
          console.log($scope.productcate);
        },
        function (error) {
          // Xử lý lỗi tại đây nếu cần
          console.log(error);
        }
      );
  };
  $scope.handleChange = function () {
    if ($scope.selectedValue === "1") {
      $scope.searchProductPriceAsc();
    } else if ($scope.selectedValue === "2") {
      $scope.searchProductPriceDesc();
    } else {
      $scope.searchProduct();
    }
  };
  /// Add To Cart
  $scope.addToCart = function (product) {
    var cartItems = $window.localStorage.getItem("cartItems");
    if (!cartItems) {
      cartItems = [];
    } else {
      cartItems = JSON.parse(cartItems);
    }

    var index = cartItems.findIndex(
      (item) => item.maSanPham === product.maSanPham
    );
    if (index === -1) {
      product.soLuong = 1;
      cartItems.push(product);
    } else {
      cartItems[index].soLuong += 1;
    }

    alert("Thêm sản phẩm vào giỏ hàng thành công");
    $window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
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
